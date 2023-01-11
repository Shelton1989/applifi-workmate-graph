import { TenantCreateOrConnectWithoutExperiencesInput } from "../inputs/TenantCreateOrConnectWithoutExperiencesInput";
import { TenantCreateWithoutExperiencesInput } from "../inputs/TenantCreateWithoutExperiencesInput";
import { TenantWhereUniqueInput } from "../inputs/TenantWhereUniqueInput";
export declare class TenantCreateNestedOneWithoutExperiencesInput {
    create?: TenantCreateWithoutExperiencesInput | undefined;
    connectOrCreate?: TenantCreateOrConnectWithoutExperiencesInput | undefined;
    connect?: TenantWhereUniqueInput | undefined;
}
