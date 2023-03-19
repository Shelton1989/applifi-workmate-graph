import { OrderLineItemOrderByWithRelationInput } from "../../../inputs/OrderLineItemOrderByWithRelationInput";
import { OrderLineItemWhereInput } from "../../../inputs/OrderLineItemWhereInput";
import { OrderLineItemWhereUniqueInput } from "../../../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderItemsArgs {
    where?: OrderLineItemWhereInput | undefined;
    orderBy?: OrderLineItemOrderByWithRelationInput[] | undefined;
    cursor?: OrderLineItemWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "details" | "comments" | "mealItemId" | "mealItemOptionId" | "orderId" | "createdAt" | "updatedAt"> | undefined;
}
