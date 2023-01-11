import { GraphQLResolveInfo } from "graphql";
import { UpdateManyBookingOrderLineItemArgs } from "./args/UpdateManyBookingOrderLineItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBookingOrderLineItemResolver {
    updateManyBookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBookingOrderLineItemArgs): Promise<AffectedRowsOutput>;
}
