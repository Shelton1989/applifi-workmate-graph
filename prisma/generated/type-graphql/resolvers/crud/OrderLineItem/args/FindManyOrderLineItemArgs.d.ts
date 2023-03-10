import { OrderLineItemOrderByWithRelationInput } from "../../../inputs/OrderLineItemOrderByWithRelationInput";
import { OrderLineItemWhereInput } from "../../../inputs/OrderLineItemWhereInput";
import { OrderLineItemWhereUniqueInput } from "../../../inputs/OrderLineItemWhereUniqueInput";
export declare class FindManyOrderLineItemArgs {
    where?: OrderLineItemWhereInput | undefined;
    orderBy?: OrderLineItemOrderByWithRelationInput[] | undefined;
    cursor?: OrderLineItemWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "details" | "comments" | "mealItemId" | "mealItemOptionId" | "bookingId" | "createdAt" | "updatedAt"> | undefined;
}
