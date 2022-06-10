import { GraphQLResolveInfo } from "graphql";
import { FindFirstOrderLineItemArgs } from "./args/FindFirstOrderLineItemArgs";
import { OrderLineItem } from "../../../models/OrderLineItem";
export declare class FindFirstOrderLineItemResolver {
    findFirstOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: FindFirstOrderLineItemArgs): Promise<OrderLineItem | null>;
}
