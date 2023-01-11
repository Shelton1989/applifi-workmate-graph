import { LocationCreateManyTenantInputEnvelope } from "../inputs/LocationCreateManyTenantInputEnvelope";
import { LocationCreateOrConnectWithoutTenantInput } from "../inputs/LocationCreateOrConnectWithoutTenantInput";
import { LocationCreateWithoutTenantInput } from "../inputs/LocationCreateWithoutTenantInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationCreateNestedManyWithoutTenantInput {
    create?: LocationCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutTenantInput[] | undefined;
    createMany?: LocationCreateManyTenantInputEnvelope | undefined;
    connect?: LocationWhereUniqueInput[] | undefined;
}
