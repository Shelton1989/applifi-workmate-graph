import { GraphQLResolveInfo } from "graphql";
import { UpdateOrderLineItemArgs } from "./args/UpdateOrderLineItemArgs";
import { OrderLineItem } from "../../../models/OrderLineItem";
export declare class UpdateOrderLineItemResolver {
    updateOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: UpdateOrderLineItemArgs): Promise<OrderLineItem | null>;
}
