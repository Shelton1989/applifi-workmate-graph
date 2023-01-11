import { GraphQLResolveInfo } from "graphql";
import { CreateManyBookingOrderLineItemArgs } from "./args/CreateManyBookingOrderLineItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBookingOrderLineItemResolver {
    createManyBookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: CreateManyBookingOrderLineItemArgs): Promise<AffectedRowsOutput>;
}
