import { BillingOrderByWithRelationInput } from "../../../inputs/BillingOrderByWithRelationInput";
import { BillingWhereInput } from "../../../inputs/BillingWhereInput";
import { BillingWhereUniqueInput } from "../../../inputs/BillingWhereUniqueInput";
export declare class AggregateBillingArgs {
    where?: BillingWhereInput | undefined;
    orderBy?: BillingOrderByWithRelationInput[] | undefined;
    cursor?: BillingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
