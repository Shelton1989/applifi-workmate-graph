import { ArtworkOrderByWithRelationInput } from "../inputs/ArtworkOrderByWithRelationInput";
import { ColorOrderByWithRelationInput } from "../inputs/ColorOrderByWithRelationInput";
import { OrderOrderByWithRelationInput } from "../inputs/OrderOrderByWithRelationInput";
import { PriceOrderByWithRelationInput } from "../inputs/PriceOrderByWithRelationInput";
import { ProductOrderByWithRelationInput } from "../inputs/ProductOrderByWithRelationInput";
import { SizeOrderByWithRelationInput } from "../inputs/SizeOrderByWithRelationInput";
export declare class OrderLineItemOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    lineItemPrice?: PriceOrderByWithRelationInput | undefined;
    priceId?: "asc" | "desc" | undefined;
    SelectedProduct?: ProductOrderByWithRelationInput | undefined;
    selectedProductId?: "asc" | "desc" | undefined;
    SelectedColor?: ColorOrderByWithRelationInput | undefined;
    selectedColorId?: "asc" | "desc" | undefined;
    SelectedArtwork?: ArtworkOrderByWithRelationInput | undefined;
    selectedArtworkId?: "asc" | "desc" | undefined;
    SelectedSize?: SizeOrderByWithRelationInput | undefined;
    selectedSizeId?: "asc" | "desc" | undefined;
    Order?: OrderOrderByWithRelationInput | undefined;
    orderId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
