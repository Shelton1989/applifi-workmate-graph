import { Episode, MEDIA_TYPE, Post, PostCreateInput, PostUpdateInput, PostWhereUniqueInput, SeasonSeries, Topic } from "../../prisma/generated/type-graphql";
import { Context } from "../context";
import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { prisma as prismaClient } from "../context";
import moment from "moment";

@Resolver(of => Post)
export class PostResolver {
  @Authorized()
  @Mutation(() => Post)
  async createPostReview(
    @Arg("data") data: PostCreateInput,
    @Ctx() { prisma }: Context,
  ) {

    const { rating, caption, type } = data;

    if (rating < 0 || rating > 10) {
      throw new Error("Rating must be between 0 and 10")
    }

    // TODO: set can be counted after NLP analysis
    let canBeCounted = true;

    if (caption && caption?.split(/[!?.]/g).length <= 2) { 
      canBeCounted = false;
    }

    let entityId: string = data.Topic?.connect?.id || data.SeasonSeries?.connect?.id || data.Episode?.connect?.id || "";

    await prismaClient.$transaction(async (tx) => {

      let entity: ((Topic | SeasonSeries | Episode) & { Posts: Post[]; }) | null;

      switch (type) {
        case "TOPIC":
          entity = await tx.topic.findUnique({ where: { id: entityId }, include: { Posts: true } } );
          break;
        case "SEASON_SERIES":
          entity = await tx.seasonSeries.findUnique({ where: { id: entityId }, include: { Posts: true } });
          break;
        case "EPISODE":
          entity = await tx.episode.findUnique({ where: { id: entityId }, include: { Posts: true } });
          break;
        default:
          throw new Error("Invalid type")
      }

      if (moment(entity?.releaseDate).isAfter(moment())) {
        canBeCounted = false;
      }

      const posts = entity?.Posts || [];

      const counted = posts.filter(post => post.canBeCounted);
      const countedPosts = counted.length + (canBeCounted ? 1 : 0);

      const ratingValue = parseFloat((counted.reduce((acc, post) => acc + post.rating, canBeCounted? rating : 0) / countedPosts).toFixed(2));
  
      const aggregateRating = await tx.aggregateRating.upsert({
        where: {
          id: entityId
        },
        update: {
          ratingValue: ratingValue || 0,
          countedPosts,
          ratingCount: {
            increment: 1
          },
          allPosts: {
            increment: 1
          }
        },
        create: {
          id: entityId,
          ratingValue: ratingValue || 0,
          countedPosts,
          ratingCount: 1,
          allPosts: 1,
        }
      })

      switch (type) {
        case "TOPIC":
          await tx.topic.update({ where: { id: entityId }, data: { aggregateRatingId: aggregateRating.id  } });
          break;
        case "SEASON_SERIES":
          await tx.seasonSeries.update({ where: { id: entityId }, data: { aggregateRatingId: aggregateRating.id  } });
          break;
        case "EPISODE":
          await tx.episode.update({ where: { id: entityId}, data: { aggregateRatingId: aggregateRating.id  } });
          break;
        default:
          throw new Error("Invalid type")
      }
  
    })

    data.canBeCounted = canBeCounted;
    
    return await prisma.post.create({
      data,
    });
  }
}


