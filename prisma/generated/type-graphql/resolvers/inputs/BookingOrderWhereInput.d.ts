import { BookingOrderLineItemListRelationFilter } from "../inputs/BookingOrderLineItemListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBOOKING_ORDER_STATUSFilter } from "../inputs/EnumBOOKING_ORDER_STATUSFilter";
import { EnumPAYMENT_STATUSFilter } from "../inputs/EnumPAYMENT_STATUSFilter";
import { ExperienceRelationFilter } from "../inputs/ExperienceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TenantRelationFilter } from "../inputs/TenantRelationFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class BookingOrderWhereInput {
    AND?: BookingOrderWhereInput[] | undefined;
    OR?: BookingOrderWhereInput[] | undefined;
    NOT?: BookingOrderWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Experience?: ExperienceRelationFilter | undefined;
    experienceId?: StringFilter | undefined;
    status?: EnumBOOKING_ORDER_STATUSFilter | undefined;
    Buyer?: UserRelationFilter | undefined;
    buyerId?: StringFilter | undefined;
    Tenant?: TenantRelationFilter | undefined;
    tenantId?: StringFilter | undefined;
    Items?: BookingOrderLineItemListRelationFilter | undefined;
    Transactions?: TransactionListRelationFilter | undefined;
    PaymentStatus?: EnumPAYMENT_STATUSFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
