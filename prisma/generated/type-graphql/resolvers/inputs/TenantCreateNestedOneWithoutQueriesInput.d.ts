import { TenantCreateOrConnectWithoutQueriesInput } from "../inputs/TenantCreateOrConnectWithoutQueriesInput";
import { TenantCreateWithoutQueriesInput } from "../inputs/TenantCreateWithoutQueriesInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantCreateNestedOneWithoutQueriesInput {
    create?: TenantCreateWithoutQueriesInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutQueriesInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
}
