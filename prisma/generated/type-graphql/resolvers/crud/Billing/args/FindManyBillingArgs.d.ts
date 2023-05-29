import { BillingOrderByWithRelationInput } from "../../../inputs/BillingOrderByWithRelationInput";
import { BillingWhereInput } from "../../../inputs/BillingWhereInput";
import { BillingWhereUniqueInput } from "../../../inputs/BillingWhereUniqueInput";
export declare class FindManyBillingArgs {
    where?: BillingWhereInput | undefined;
    orderBy?: BillingOrderByWithRelationInput[] | undefined;
    cursor?: BillingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tenantId" | "stripeCustomerId" | "plan" | "status" | "createdAt" | "updatedAt"> | undefined;
}
