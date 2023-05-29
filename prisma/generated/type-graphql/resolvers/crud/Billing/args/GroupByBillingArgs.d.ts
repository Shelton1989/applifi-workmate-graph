import { BillingOrderByWithAggregationInput } from "../../../inputs/BillingOrderByWithAggregationInput";
import { BillingScalarWhereWithAggregatesInput } from "../../../inputs/BillingScalarWhereWithAggregatesInput";
import { BillingWhereInput } from "../../../inputs/BillingWhereInput";
export declare class GroupByBillingArgs {
    where?: BillingWhereInput | undefined;
    orderBy?: BillingOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tenantId" | "stripeCustomerId" | "plan" | "status" | "createdAt" | "updatedAt">;
    having?: BillingScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
