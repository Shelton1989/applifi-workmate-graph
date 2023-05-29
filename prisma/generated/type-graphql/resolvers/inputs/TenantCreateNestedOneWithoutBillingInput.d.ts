import { TenantCreateOrConnectWithoutBillingInput } from "../inputs/TenantCreateOrConnectWithoutBillingInput";
import { TenantCreateWithoutBillingInput } from "../inputs/TenantCreateWithoutBillingInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantCreateNestedOneWithoutBillingInput {
    create?: TenantCreateWithoutBillingInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutBillingInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
}
