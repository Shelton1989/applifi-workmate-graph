import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBILLING_STATUSFilter } from "../inputs/EnumBILLING_STATUSFilter";
import { EnumPLANFilter } from "../inputs/EnumPLANFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TenantRelationFilter } from "../inputs/TenantRelationFilter";
export declare class BillingWhereInput {
    AND?: BillingWhereInput[] | undefined;
    OR?: BillingWhereInput[] | undefined;
    NOT?: BillingWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Tenant?: TenantRelationFilter | undefined;
    tenantId?: StringFilter | undefined;
    stripeCustomerId?: StringNullableFilter | undefined;
    stripeSubscriptionId?: StringNullableFilter | undefined;
    plan?: EnumPLANFilter | undefined;
    status?: EnumBILLING_STATUSFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
