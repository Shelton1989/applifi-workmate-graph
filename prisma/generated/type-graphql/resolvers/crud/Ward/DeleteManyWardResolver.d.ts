import { GraphQLResolveInfo } from "graphql";
import { DeleteManyWardArgs } from "./args/DeleteManyWardArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyWardResolver {
    deleteManyWard(ctx: any, info: GraphQLResolveInfo, args: DeleteManyWardArgs): Promise<AffectedRowsOutput>;
}
