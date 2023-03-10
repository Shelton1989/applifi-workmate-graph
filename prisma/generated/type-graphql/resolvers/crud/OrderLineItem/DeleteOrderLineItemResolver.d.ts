import { GraphQLResolveInfo } from "graphql";
import { DeleteOrderLineItemArgs } from "./args/DeleteOrderLineItemArgs";
import { OrderLineItem } from "../../../models/OrderLineItem";
export declare class DeleteOrderLineItemResolver {
    deleteOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: DeleteOrderLineItemArgs): Promise<OrderLineItem | null>;
}
