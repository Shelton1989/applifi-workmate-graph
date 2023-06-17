import { GraphQLResolveInfo } from "graphql";
import { CreateManyProductKeyArgs } from "./args/CreateManyProductKeyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProductKeyResolver {
    createManyProductKey(ctx: any, info: GraphQLResolveInfo, args: CreateManyProductKeyArgs): Promise<AffectedRowsOutput>;
}
