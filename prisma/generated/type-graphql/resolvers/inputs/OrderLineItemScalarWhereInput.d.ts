import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderLineItemScalarWhereInput {
    AND?: OrderLineItemScalarWhereInput[] | undefined;
    OR?: OrderLineItemScalarWhereInput[] | undefined;
    NOT?: OrderLineItemScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    details?: StringNullableFilter | undefined;
    comments?: StringNullableFilter | undefined;
    mealItemId?: StringNullableFilter | undefined;
    mealItemOptionId?: StringNullableFilter | undefined;
    bookingId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
