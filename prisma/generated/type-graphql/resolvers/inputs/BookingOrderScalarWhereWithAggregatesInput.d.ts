import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumBOOKING_ORDER_STATUSWithAggregatesFilter } from "../inputs/EnumBOOKING_ORDER_STATUSWithAggregatesFilter";
import { EnumPAYMENT_STATUSWithAggregatesFilter } from "../inputs/EnumPAYMENT_STATUSWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BookingOrderScalarWhereWithAggregatesInput {
    AND?: BookingOrderScalarWhereWithAggregatesInput[] | undefined;
    OR?: BookingOrderScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BookingOrderScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    experienceId?: StringWithAggregatesFilter | undefined;
    status?: EnumBOOKING_ORDER_STATUSWithAggregatesFilter | undefined;
    buyerId?: StringWithAggregatesFilter | undefined;
    tenantId?: StringWithAggregatesFilter | undefined;
    PaymentStatus?: EnumPAYMENT_STATUSWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
