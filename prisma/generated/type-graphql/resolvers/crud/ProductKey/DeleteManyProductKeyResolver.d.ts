import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProductKeyArgs } from "./args/DeleteManyProductKeyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProductKeyResolver {
    deleteManyProductKey(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProductKeyArgs): Promise<AffectedRowsOutput>;
}
