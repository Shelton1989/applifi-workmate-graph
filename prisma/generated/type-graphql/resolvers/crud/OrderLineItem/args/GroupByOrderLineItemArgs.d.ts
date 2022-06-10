import { OrderLineItemOrderByWithAggregationInput } from "../../../inputs/OrderLineItemOrderByWithAggregationInput";
import { OrderLineItemScalarWhereWithAggregatesInput } from "../../../inputs/OrderLineItemScalarWhereWithAggregatesInput";
import { OrderLineItemWhereInput } from "../../../inputs/OrderLineItemWhereInput";
export declare class GroupByOrderLineItemArgs {
    where?: OrderLineItemWhereInput | undefined;
    orderBy?: OrderLineItemOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "priceId" | "selectedProductId" | "selectedColorId" | "selectedArtworkId" | "selectedSizeId" | "orderId" | "createdAt" | "updatedAt">;
    having?: OrderLineItemScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
