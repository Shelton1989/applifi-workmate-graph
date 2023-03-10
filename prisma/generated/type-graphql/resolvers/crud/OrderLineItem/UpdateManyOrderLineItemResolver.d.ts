import { GraphQLResolveInfo } from "graphql";
import { UpdateManyOrderLineItemArgs } from "./args/UpdateManyOrderLineItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOrderLineItemResolver {
    updateManyOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOrderLineItemArgs): Promise<AffectedRowsOutput>;
}
