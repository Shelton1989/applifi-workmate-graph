import { ArtworkRelationFilter } from "../inputs/ArtworkRelationFilter";
import { ColorRelationFilter } from "../inputs/ColorRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { PriceRelationFilter } from "../inputs/PriceRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { SizeRelationFilter } from "../inputs/SizeRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OrderLineItemWhereInput {
    AND?: OrderLineItemWhereInput[] | undefined;
    OR?: OrderLineItemWhereInput[] | undefined;
    NOT?: OrderLineItemWhereInput[] | undefined;
    id?: StringFilter | undefined;
    lineItemPrice?: PriceRelationFilter | undefined;
    priceId?: StringFilter | undefined;
    SelectedProduct?: ProductRelationFilter | undefined;
    selectedProductId?: StringFilter | undefined;
    SelectedColor?: ColorRelationFilter | undefined;
    selectedColorId?: StringFilter | undefined;
    SelectedArtwork?: ArtworkRelationFilter | undefined;
    selectedArtworkId?: StringFilter | undefined;
    SelectedSize?: SizeRelationFilter | undefined;
    selectedSizeId?: StringFilter | undefined;
    Order?: OrderRelationFilter | undefined;
    orderId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
