import { ExperienceCreateOrConnectWithoutLikedByInput } from "../inputs/ExperienceCreateOrConnectWithoutLikedByInput";
import { ExperienceCreateWithoutLikedByInput } from "../inputs/ExperienceCreateWithoutLikedByInput";
import { ExperienceScalarWhereInput } from "../inputs/ExperienceScalarWhereInput";
import { ExperienceUpdateManyWithWhereWithoutLikedByInput } from "../inputs/ExperienceUpdateManyWithWhereWithoutLikedByInput";
import { ExperienceUpdateWithWhereUniqueWithoutLikedByInput } from "../inputs/ExperienceUpdateWithWhereUniqueWithoutLikedByInput";
import { ExperienceUpsertWithWhereUniqueWithoutLikedByInput } from "../inputs/ExperienceUpsertWithWhereUniqueWithoutLikedByInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateManyWithoutLikedByInput {
    create?: ExperienceCreateWithoutLikedByInput[] | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutLikedByInput[] | undefined;
    upsert?: ExperienceUpsertWithWhereUniqueWithoutLikedByInput[] | undefined;
    set?: ExperienceWhereUniqueInput[] | undefined;
    disconnect?: ExperienceWhereUniqueInput[] | undefined;
    delete?: ExperienceWhereUniqueInput[] | undefined;
    connect?: ExperienceWhereUniqueInput[] | undefined;
    update?: ExperienceUpdateWithWhereUniqueWithoutLikedByInput[] | undefined;
    updateMany?: ExperienceUpdateManyWithWhereWithoutLikedByInput[] | undefined;
    deleteMany?: ExperienceScalarWhereInput[] | undefined;
}
