import { GraphQLResolveInfo } from "graphql";
import { FindUniqueOrderLineItemArgs } from "./args/FindUniqueOrderLineItemArgs";
import { OrderLineItem } from "../../../models/OrderLineItem";
export declare class FindUniqueOrderLineItemResolver {
    orderLineItem(ctx: any, info: GraphQLResolveInfo, args: FindUniqueOrderLineItemArgs): Promise<OrderLineItem | null>;
}
