import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OrderLineItemScalarWhereInput {
    AND?: OrderLineItemScalarWhereInput[] | undefined;
    OR?: OrderLineItemScalarWhereInput[] | undefined;
    NOT?: OrderLineItemScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    priceId?: StringFilter | undefined;
    selectedProductId?: StringFilter | undefined;
    selectedColorId?: StringFilter | undefined;
    selectedArtworkId?: StringFilter | undefined;
    selectedSizeId?: StringFilter | undefined;
    orderId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
