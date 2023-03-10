import { GraphQLResolveInfo } from "graphql";
import { UpsertOrderLineItemArgs } from "./args/UpsertOrderLineItemArgs";
import { OrderLineItem } from "../../../models/OrderLineItem";
export declare class UpsertOrderLineItemResolver {
    upsertOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: UpsertOrderLineItemArgs): Promise<OrderLineItem>;
}
