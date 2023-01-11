import { TenantCreateOrConnectWithoutUsersInput } from "../inputs/TenantCreateOrConnectWithoutUsersInput";
import { TenantCreateWithoutUsersInput } from "../inputs/TenantCreateWithoutUsersInput";
import { TenantUpdateWithoutUsersInput } from "../inputs/TenantUpdateWithoutUsersInput";
import { TenantUpsertWithoutUsersInput } from "../inputs/TenantUpsertWithoutUsersInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantUpdateOneWithoutUsersInput {
    create?: TenantCreateWithoutUsersInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput | undefined;
    upsert?: TenantUpsertWithoutUsersInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: TenantWhereUniqueInput | undefined;
    update?: TenantUpdateWithoutUsersInput | undefined;
}
