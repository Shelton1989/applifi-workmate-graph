import { OrderLineItemOrderByWithAggregationInput } from "../../../inputs/OrderLineItemOrderByWithAggregationInput";
import { OrderLineItemScalarWhereWithAggregatesInput } from "../../../inputs/OrderLineItemScalarWhereWithAggregatesInput";
import { OrderLineItemWhereInput } from "../../../inputs/OrderLineItemWhereInput";
export declare class GroupByOrderLineItemArgs {
    where?: OrderLineItemWhereInput | undefined;
    orderBy?: OrderLineItemOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "details" | "comments" | "mealItemId" | "mealItemOptionId" | "bookingId" | "createdAt" | "updatedAt">;
    having?: OrderLineItemScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
