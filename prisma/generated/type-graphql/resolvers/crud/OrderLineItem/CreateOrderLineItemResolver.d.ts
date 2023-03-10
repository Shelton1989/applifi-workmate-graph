import { GraphQLResolveInfo } from "graphql";
import { CreateOrderLineItemArgs } from "./args/CreateOrderLineItemArgs";
import { OrderLineItem } from "../../../models/OrderLineItem";
export declare class CreateOrderLineItemResolver {
    createOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: CreateOrderLineItemArgs): Promise<OrderLineItem>;
}
