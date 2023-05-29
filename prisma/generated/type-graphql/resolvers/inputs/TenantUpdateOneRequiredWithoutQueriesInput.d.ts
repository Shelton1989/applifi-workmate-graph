import { TenantCreateOrConnectWithoutQueriesInput } from "../inputs/TenantCreateOrConnectWithoutQueriesInput";
import { TenantCreateWithoutQueriesInput } from "../inputs/TenantCreateWithoutQueriesInput";
import { TenantUpdateWithoutQueriesInput } from "../inputs/TenantUpdateWithoutQueriesInput";
import { TenantUpsertWithoutQueriesInput } from "../inputs/TenantUpsertWithoutQueriesInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantUpdateOneRequiredWithoutQueriesInput {
    create?: TenantCreateWithoutQueriesInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutQueriesInput | undefined;
    upsert?: TenantUpsertWithoutQueriesInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
    update?: TenantUpdateWithoutQueriesInput | undefined;
}
