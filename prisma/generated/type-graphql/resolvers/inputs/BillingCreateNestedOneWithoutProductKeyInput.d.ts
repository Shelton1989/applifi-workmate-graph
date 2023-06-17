import { BillingCreateOrConnectWithoutProductKeyInput } from "../inputs/BillingCreateOrConnectWithoutProductKeyInput";
import { BillingCreateWithoutProductKeyInput } from "../inputs/BillingCreateWithoutProductKeyInput";
import { BillingWhereUniqueInput } from "../inputs/BillingWhereUniqueInput";
export declare class BillingCreateNestedOneWithoutProductKeyInput {
    create?: BillingCreateWithoutProductKeyInput | undefined;
    connectOrCreate?: BillingCreateOrConnectWithoutProductKeyInput | undefined;
    connect?: BillingWhereUniqueInput | undefined;
}
