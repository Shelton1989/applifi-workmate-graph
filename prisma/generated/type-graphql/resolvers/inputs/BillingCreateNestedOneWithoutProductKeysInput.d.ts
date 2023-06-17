import { BillingCreateOrConnectWithoutProductKeysInput } from "../inputs/BillingCreateOrConnectWithoutProductKeysInput";
import { BillingCreateWithoutProductKeysInput } from "../inputs/BillingCreateWithoutProductKeysInput";
import { BillingWhereUniqueInput } from "../inputs/BillingWhereUniqueInput";
export declare class BillingCreateNestedOneWithoutProductKeysInput {
    create?: BillingCreateWithoutProductKeysInput | undefined;
    connectOrCreate?: BillingCreateOrConnectWithoutProductKeysInput | undefined;
    connect?: BillingWhereUniqueInput | undefined;
}
