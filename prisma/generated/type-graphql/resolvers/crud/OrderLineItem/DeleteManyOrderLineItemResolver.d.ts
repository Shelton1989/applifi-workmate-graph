import { GraphQLResolveInfo } from "graphql";
import { DeleteManyOrderLineItemArgs } from "./args/DeleteManyOrderLineItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyOrderLineItemResolver {
    deleteManyOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: DeleteManyOrderLineItemArgs): Promise<AffectedRowsOutput>;
}
