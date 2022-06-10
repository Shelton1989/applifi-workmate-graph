import { GraphQLResolveInfo } from "graphql";
import { FindManyOrderLineItemArgs } from "./args/FindManyOrderLineItemArgs";
import { OrderLineItem } from "../../../models/OrderLineItem";
export declare class FindManyOrderLineItemResolver {
    orderLineItems(ctx: any, info: GraphQLResolveInfo, args: FindManyOrderLineItemArgs): Promise<OrderLineItem[]>;
}
