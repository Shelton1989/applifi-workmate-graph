import { BillingCreateOrConnectWithoutProductKeyInput } from "../inputs/BillingCreateOrConnectWithoutProductKeyInput";
import { BillingCreateWithoutProductKeyInput } from "../inputs/BillingCreateWithoutProductKeyInput";
import { BillingUpdateWithoutProductKeyInput } from "../inputs/BillingUpdateWithoutProductKeyInput";
import { BillingUpsertWithoutProductKeyInput } from "../inputs/BillingUpsertWithoutProductKeyInput";
import { BillingWhereUniqueInput } from "../inputs/BillingWhereUniqueInput";
export declare class BillingUpdateOneRequiredWithoutProductKeyInput {
    create?: BillingCreateWithoutProductKeyInput | undefined;
    connectOrCreate?: BillingCreateOrConnectWithoutProductKeyInput | undefined;
    upsert?: BillingUpsertWithoutProductKeyInput | undefined;
    connect?: BillingWhereUniqueInput | undefined;
    update?: BillingUpdateWithoutProductKeyInput | undefined;
}
