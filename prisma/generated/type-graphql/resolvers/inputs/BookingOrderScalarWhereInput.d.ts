import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBOOKING_ORDER_STATUSFilter } from "../inputs/EnumBOOKING_ORDER_STATUSFilter";
import { EnumPAYMENT_STATUSFilter } from "../inputs/EnumPAYMENT_STATUSFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BookingOrderScalarWhereInput {
    AND?: BookingOrderScalarWhereInput[] | undefined;
    OR?: BookingOrderScalarWhereInput[] | undefined;
    NOT?: BookingOrderScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    experienceId?: StringFilter | undefined;
    status?: EnumBOOKING_ORDER_STATUSFilter | undefined;
    buyerId?: StringFilter | undefined;
    tenantId?: StringFilter | undefined;
    PaymentStatus?: EnumPAYMENT_STATUSFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
