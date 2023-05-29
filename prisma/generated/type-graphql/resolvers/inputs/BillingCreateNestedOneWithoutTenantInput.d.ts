import { BillingCreateOrConnectWithoutTenantInput } from "../inputs/BillingCreateOrConnectWithoutTenantInput";
import { BillingCreateWithoutTenantInput } from "../inputs/BillingCreateWithoutTenantInput";
import { BillingWhereUniqueInput } from "../inputs/BillingWhereUniqueInput";
export declare class BillingCreateNestedOneWithoutTenantInput {
    create?: BillingCreateWithoutTenantInput | undefined;
    connectOrCreate?: BillingCreateOrConnectWithoutTenantInput | undefined;
    connect?: BillingWhereUniqueInput | undefined;
}
