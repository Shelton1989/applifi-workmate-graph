import { OrderLineItemOrderByWithRelationInput } from "../../../inputs/OrderLineItemOrderByWithRelationInput";
import { OrderLineItemWhereInput } from "../../../inputs/OrderLineItemWhereInput";
import { OrderLineItemWhereUniqueInput } from "../../../inputs/OrderLineItemWhereUniqueInput";
export declare class ArtworkOrderLineItemsArgs {
    where?: OrderLineItemWhereInput | undefined;
    orderBy?: OrderLineItemOrderByWithRelationInput[] | undefined;
    cursor?: OrderLineItemWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "priceId" | "selectedProductId" | "selectedColorId" | "selectedArtworkId" | "selectedSizeId" | "orderId" | "createdAt" | "updatedAt"> | undefined;
}
