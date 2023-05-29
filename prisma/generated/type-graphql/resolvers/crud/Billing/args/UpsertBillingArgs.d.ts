import { BillingCreateInput } from "../../../inputs/BillingCreateInput";
import { BillingUpdateInput } from "../../../inputs/BillingUpdateInput";
import { BillingWhereUniqueInput } from "../../../inputs/BillingWhereUniqueInput";
export declare class UpsertBillingArgs {
    where: BillingWhereUniqueInput;
    create: BillingCreateInput;
    update: BillingUpdateInput;
}
