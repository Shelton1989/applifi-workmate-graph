import { Post, PostCreateInput } from "prisma/generated/type-graphql";
import { Context } from "src/context";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";

@Resolver(of => Post)
export class PostResolver {
  @Mutation(() => Post)
  async createPost(
    @Arg("data") data: PostCreateInput,
    @Ctx() { prisma }: Context,
  ) {
    
    return await prisma.post.create({
      data: {
        ...data,
      }
    });
  }
}