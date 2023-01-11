import { BookingOrderLineItemListRelationFilter } from "../inputs/BookingOrderLineItemListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBOOKING_ORDER_STATUSFilter } from "../inputs/EnumBOOKING_ORDER_STATUSFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TenantRelationFilter } from "../inputs/TenantRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class BookingOrderWhereInput {
    AND?: BookingOrderWhereInput[] | undefined;
    OR?: BookingOrderWhereInput[] | undefined;
    NOT?: BookingOrderWhereInput[] | undefined;
    id?: StringFilter | undefined;
    status?: EnumBOOKING_ORDER_STATUSFilter | undefined;
    SelectedPaymentType?: StringNullableFilter | undefined;
    stripePaymentReference?: StringNullableFilter | undefined;
    Buyer?: UserRelationFilter | undefined;
    buyerId?: StringFilter | undefined;
    Tenant?: TenantRelationFilter | undefined;
    tenantId?: StringFilter | undefined;
    Items?: BookingOrderLineItemListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
