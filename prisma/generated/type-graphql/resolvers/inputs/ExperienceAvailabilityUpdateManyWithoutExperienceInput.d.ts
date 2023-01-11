import { ExperienceAvailabilityCreateManyExperienceInputEnvelope } from "../inputs/ExperienceAvailabilityCreateManyExperienceInputEnvelope";
import { ExperienceAvailabilityCreateOrConnectWithoutExperienceInput } from "../inputs/ExperienceAvailabilityCreateOrConnectWithoutExperienceInput";
import { ExperienceAvailabilityCreateWithoutExperienceInput } from "../inputs/ExperienceAvailabilityCreateWithoutExperienceInput";
import { ExperienceAvailabilityScalarWhereInput } from "../inputs/ExperienceAvailabilityScalarWhereInput";
import { ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput } from "../inputs/ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput";
import { ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput } from "../inputs/ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput";
import { ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput } from "../inputs/ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput";
import { ExperienceAvailabilityWhereUniqueInput } from "../inputs/ExperienceAvailabilityWhereUniqueInput";
export declare class ExperienceAvailabilityUpdateManyWithoutExperienceInput {
    create?: ExperienceAvailabilityCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: ExperienceAvailabilityCreateOrConnectWithoutExperienceInput[] | undefined;
    upsert?: ExperienceAvailabilityUpsertWithWhereUniqueWithoutExperienceInput[] | undefined;
    createMany?: ExperienceAvailabilityCreateManyExperienceInputEnvelope | undefined;
    set?: ExperienceAvailabilityWhereUniqueInput[] | undefined;
    disconnect?: ExperienceAvailabilityWhereUniqueInput[] | undefined;
    delete?: ExperienceAvailabilityWhereUniqueInput[] | undefined;
    connect?: ExperienceAvailabilityWhereUniqueInput[] | undefined;
    update?: ExperienceAvailabilityUpdateWithWhereUniqueWithoutExperienceInput[] | undefined;
    updateMany?: ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput[] | undefined;
    deleteMany?: ExperienceAvailabilityScalarWhereInput[] | undefined;
}
