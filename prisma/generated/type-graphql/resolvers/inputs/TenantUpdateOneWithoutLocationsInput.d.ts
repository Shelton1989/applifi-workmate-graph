import { TenantCreateOrConnectWithoutLocationsInput } from "../inputs/TenantCreateOrConnectWithoutLocationsInput";
import { TenantCreateWithoutLocationsInput } from "../inputs/TenantCreateWithoutLocationsInput";
import { TenantUpdateWithoutLocationsInput } from "../inputs/TenantUpdateWithoutLocationsInput";
import { TenantUpsertWithoutLocationsInput } from "../inputs/TenantUpsertWithoutLocationsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantUpdateOneWithoutLocationsInput {
    create?: TenantCreateWithoutLocationsInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutLocationsInput | undefined;
    upsert?: TenantUpsertWithoutLocationsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: TenantWhereUniqueInput | undefined;
    update?: TenantUpdateWithoutLocationsInput | undefined;
}
