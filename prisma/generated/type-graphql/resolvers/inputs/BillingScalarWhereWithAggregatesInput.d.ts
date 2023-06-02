import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumBILLING_STATUSWithAggregatesFilter } from "../inputs/EnumBILLING_STATUSWithAggregatesFilter";
import { EnumPLANWithAggregatesFilter } from "../inputs/EnumPLANWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BillingScalarWhereWithAggregatesInput {
    AND?: BillingScalarWhereWithAggregatesInput[] | undefined;
    OR?: BillingScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BillingScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    tenantId?: StringWithAggregatesFilter | undefined;
    stripeCustomerId?: StringNullableWithAggregatesFilter | undefined;
    stripeSubscriptionId?: StringNullableWithAggregatesFilter | undefined;
    plan?: EnumPLANWithAggregatesFilter | undefined;
    status?: EnumBILLING_STATUSWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
