import { TenantCreateOrConnectWithoutLocationsInput } from "../inputs/TenantCreateOrConnectWithoutLocationsInput";
import { TenantCreateWithoutLocationsInput } from "../inputs/TenantCreateWithoutLocationsInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantCreateNestedOneWithoutLocationsInput {
    create?: TenantCreateWithoutLocationsInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutLocationsInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
}
