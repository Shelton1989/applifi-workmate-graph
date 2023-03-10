import { TenantCreateOrConnectWithoutOrdersInput } from "../inputs/TenantCreateOrConnectWithoutOrdersInput";
import { TenantCreateWithoutOrdersInput } from "../inputs/TenantCreateWithoutOrdersInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantCreateNestedOneWithoutOrdersInput {
    create?: TenantCreateWithoutOrdersInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutOrdersInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
}
