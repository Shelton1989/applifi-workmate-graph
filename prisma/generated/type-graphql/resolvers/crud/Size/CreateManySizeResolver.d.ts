import { GraphQLResolveInfo } from "graphql";
import { CreateManySizeArgs } from "./args/CreateManySizeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySizeResolver {
    createManySize(ctx: any, info: GraphQLResolveInfo, args: CreateManySizeArgs): Promise<AffectedRowsOutput>;
}
