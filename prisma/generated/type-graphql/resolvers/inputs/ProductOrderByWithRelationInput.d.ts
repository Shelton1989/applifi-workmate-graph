import { ArtworkOrderByRelationAggregateInput } from "../inputs/ArtworkOrderByRelationAggregateInput";
import { BrandProductOrderByWithRelationInput } from "../inputs/BrandProductOrderByWithRelationInput";
import { ColorOrderByRelationAggregateInput } from "../inputs/ColorOrderByRelationAggregateInput";
import { InventoryOrderByWithRelationInput } from "../inputs/InventoryOrderByWithRelationInput";
import { OrderLineItemOrderByRelationAggregateInput } from "../inputs/OrderLineItemOrderByRelationAggregateInput";
import { PriceOrderByWithRelationInput } from "../inputs/PriceOrderByWithRelationInput";
import { SizeOrderByRelationAggregateInput } from "../inputs/SizeOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
export declare class ProductOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    price?: PriceOrderByWithRelationInput | undefined;
    priceId?: "asc" | "desc" | undefined;
    availableQuantity?: "asc" | "desc" | undefined;
    photo?: "asc" | "desc" | undefined;
    gallery?: "asc" | "desc" | undefined;
    BaseProduct?: BrandProductOrderByWithRelationInput | undefined;
    baseProductId?: "asc" | "desc" | undefined;
    Artwork?: ArtworkOrderByRelationAggregateInput | undefined;
    artworkIds?: "asc" | "desc" | undefined;
    Colors?: ColorOrderByRelationAggregateInput | undefined;
    colorIds?: "asc" | "desc" | undefined;
    Sizes?: SizeOrderByRelationAggregateInput | undefined;
    sizeIds?: "asc" | "desc" | undefined;
    OrderLineItems?: OrderLineItemOrderByRelationAggregateInput | undefined;
    LikedBy?: UserOrderByRelationAggregateInput | undefined;
    likedByIds?: "asc" | "desc" | undefined;
    Inventory?: InventoryOrderByWithRelationInput | undefined;
    inventoryId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}