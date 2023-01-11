import { LocationCreateManyExperienceInputEnvelope } from "../inputs/LocationCreateManyExperienceInputEnvelope";
import { LocationCreateOrConnectWithoutExperienceInput } from "../inputs/LocationCreateOrConnectWithoutExperienceInput";
import { LocationCreateWithoutExperienceInput } from "../inputs/LocationCreateWithoutExperienceInput";
import { LocationScalarWhereInput } from "../inputs/LocationScalarWhereInput";
import { LocationUpdateManyWithWhereWithoutExperienceInput } from "../inputs/LocationUpdateManyWithWhereWithoutExperienceInput";
import { LocationUpdateWithWhereUniqueWithoutExperienceInput } from "../inputs/LocationUpdateWithWhereUniqueWithoutExperienceInput";
import { LocationUpsertWithWhereUniqueWithoutExperienceInput } from "../inputs/LocationUpsertWithWhereUniqueWithoutExperienceInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";
export declare class LocationUpdateManyWithoutExperienceInput {
    create?: LocationCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: LocationCreateOrConnectWithoutExperienceInput[] | undefined;
    upsert?: LocationUpsertWithWhereUniqueWithoutExperienceInput[] | undefined;
    createMany?: LocationCreateManyExperienceInputEnvelope | undefined;
    set?: LocationWhereUniqueInput[] | undefined;
    disconnect?: LocationWhereUniqueInput[] | undefined;
    delete?: LocationWhereUniqueInput[] | undefined;
    connect?: LocationWhereUniqueInput[] | undefined;
    update?: LocationUpdateWithWhereUniqueWithoutExperienceInput[] | undefined;
    updateMany?: LocationUpdateManyWithWhereWithoutExperienceInput[] | undefined;
    deleteMany?: LocationScalarWhereInput[] | undefined;
}
