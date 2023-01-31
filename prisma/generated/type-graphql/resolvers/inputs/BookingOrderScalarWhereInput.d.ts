import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBOOKING_ORDER_STATUSFilter } from "../inputs/EnumBOOKING_ORDER_STATUSFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class BookingOrderScalarWhereInput {
    AND?: BookingOrderScalarWhereInput[] | undefined;
    OR?: BookingOrderScalarWhereInput[] | undefined;
    NOT?: BookingOrderScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    experienceId?: StringFilter | undefined;
    status?: EnumBOOKING_ORDER_STATUSFilter | undefined;
    SelectedPaymentType?: StringNullableFilter | undefined;
    stripePaymentReference?: StringNullableFilter | undefined;
    buyerId?: StringFilter | undefined;
    tenantId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
