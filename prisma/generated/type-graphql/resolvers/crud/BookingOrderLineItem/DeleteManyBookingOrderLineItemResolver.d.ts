import { GraphQLResolveInfo } from "graphql";
import { DeleteManyBookingOrderLineItemArgs } from "./args/DeleteManyBookingOrderLineItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBookingOrderLineItemResolver {
    deleteManyBookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBookingOrderLineItemArgs): Promise<AffectedRowsOutput>;
}
