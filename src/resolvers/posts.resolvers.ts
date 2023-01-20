import { Experience, Post, PostCreateInput } from "../../prisma/generated/type-graphql";
import { Context } from "../context";
import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { prisma as prismaClient } from "../context";

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

    if (caption && caption?.split(/[!?.]/g).length < 2) { 
      canBeCounted = false;
    }

    let entityId: string = data.Experience?.connect?.id || "";

    await prismaClient.$transaction(async (tx) => {

      let entity: ((Experience) & { Posts: Post[]; }) | null;

      entity = await tx.experience.findUnique({ where: { id: entityId }, include: { Posts: true } } )

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

      await tx.experience.update({ where: { id: entityId }, data: { AggregateRating: { connect: { id: aggregateRating.id } }  } })
  
    })

    data.canBeCounted = canBeCounted;
    
    return await prisma.post.create({
      data,
    });
  }
}


