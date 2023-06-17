import { BillingCreateOrConnectWithoutProductKeysInput } from "../inputs/BillingCreateOrConnectWithoutProductKeysInput";
import { BillingCreateWithoutProductKeysInput } from "../inputs/BillingCreateWithoutProductKeysInput";
import { BillingUpdateWithoutProductKeysInput } from "../inputs/BillingUpdateWithoutProductKeysInput";
import { BillingUpsertWithoutProductKeysInput } from "../inputs/BillingUpsertWithoutProductKeysInput";
import { BillingWhereUniqueInput } from "../inputs/BillingWhereUniqueInput";
export declare class BillingUpdateOneWithoutProductKeysInput {
    create?: BillingCreateWithoutProductKeysInput | undefined;
    connectOrCreate?: BillingCreateOrConnectWithoutProductKeysInput | undefined;
    upsert?: BillingUpsertWithoutProductKeysInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: BillingWhereUniqueInput | undefined;
    update?: BillingUpdateWithoutProductKeysInput | undefined;
}
