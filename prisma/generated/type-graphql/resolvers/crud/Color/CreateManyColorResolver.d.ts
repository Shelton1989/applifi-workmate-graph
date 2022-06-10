import { GraphQLResolveInfo } from "graphql";
import { CreateManyColorArgs } from "./args/CreateManyColorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyColorResolver {
    createManyColor(ctx: any, info: GraphQLResolveInfo, args: CreateManyColorArgs): Promise<AffectedRowsOutput>;
}
