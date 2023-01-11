import { Context } from "../context";
import { Experience, ExperienceOrderByWithRelationInput } from "../../prisma/generated/type-graphql";
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import moment from "moment";

@Resolver(of => Experience)
export class TopicResolver {

  @Query(() => [Experience])
  async searchTopics(
    @Ctx() { prisma }: Context,
    @Arg("search") search: string,
    @Arg("take", { defaultValue: 20, nullable: true }) take: number,
    @Arg("skip", { defaultValue: 0, nullable: true }) skip: number,
    @Arg("orderBy", { nullable: true, defaultValue: {} }) orderBy: ExperienceOrderByWithRelationInput,
  ) {
    const should = [
      {
        text: {
          query: search,
          path: "title",
          fuzzy: {
            maxEdits: 2,
          },
          score: {
            boost: {
              path: "year",
              undefined: 10,
            }
          }
        },
      },
      {
        text: {
          query: search,
          path: "overview",
          fuzzy: {
            maxEdits: 2,
          },
          score: {
            boost: {
              value: 5,
            }
          }
        }
      },
    ]

    const s = search
    let year = parseInt(s.replace( /^\D+/g, ''));

    if (!isNaN(year) && moment(year.toString(), "YYYY").isValid()) {
      should.push({text : {query: search,
      path: "year",
      fuzzy: {
        maxEdits: 2,
      },
      score: {
        boost: {
          path: "year",
          undefined: 10,
        }
      }}})
    }

    const results = await prisma.experience.aggregateRaw({
      pipeline: [
        {
          $search: {
            index: "autocomplete",
            compound: {
              should
            }
          },
        },
        {
          $limit: take,
        },
        {
          $skip: skip,
        }
      ],
    });

    const ids = results as unknown as any[] || []

    return await prisma.experience.findMany({
      where: {
        id: {
          in: ids.map((id: any) => id._id)
        }
      },
      orderBy
    })
  }
}