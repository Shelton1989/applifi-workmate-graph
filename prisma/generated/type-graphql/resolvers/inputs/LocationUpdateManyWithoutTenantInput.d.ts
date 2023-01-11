import { LocationCreateManyTenantInputEnvelope } from "../inputs/LocationCreateManyTenantInputEnvelope";
import { LocationCreateOrConnectWithoutTenantInput } from "../inputs/LocationCreateOrConnectWithoutTenantInput";
import { LocationCreateWithoutTenantInput } from "../inputs/LocationCreateWithoutTenantInput";
import { LocationScalarWhereInput } from "../inputs/LocationScalarWhereInput";
import { LocationUpdateManyWithWhereWithoutTenantInput } from "../inputs/LocationUpdateManyWithWhereWithoutTenantInput";
import { LocationUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/LocationUpdateWithWhereUniqueWithoutTenantInput";
import { LocationUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/LocationUpsertWithWhereUniqueWithoutTenantInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationUpdateManyWithoutTenantInput {
    create?: LocationCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutTenantInput[] | undefined;
    upsert?: LocationUpsertWithWhereUniqueWithoutTenantInput[] | undefined;
    createMany?: LocationCreateManyTenantInputEnvelope | undefined;
    set?: LocationWhereUniqueInput[] | undefined;
    disconnect?: LocationWhereUniqueInput[] | undefined;
    delete?: LocationWhereUniqueInput[] | undefined;
    connect?: LocationWhereUniqueInput[] | undefined;
    update?: LocationUpdateWithWhereUniqueWithoutTenantInput[] | undefined;
    updateMany?: LocationUpdateManyWithWhereWithoutTenantInput[] | undefined;
    deleteMany?: LocationScalarWhereInput[] | undefined;
}
