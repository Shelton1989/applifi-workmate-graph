import { TenantCreateOrConnectWithoutUsersInput } from "../inputs/TenantCreateOrConnectWithoutUsersInput";
import { TenantCreateWithoutUsersInput } from "../inputs/TenantCreateWithoutUsersInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantCreateNestedOneWithoutUsersInput {
    create?: TenantCreateWithoutUsersInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
}
