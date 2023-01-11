import { ExperienceCreateOrConnectWithoutLikedByInput } from "../inputs/ExperienceCreateOrConnectWithoutLikedByInput";
import { ExperienceCreateWithoutLikedByInput } from "../inputs/ExperienceCreateWithoutLikedByInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedManyWithoutLikedByInput {
    create?: ExperienceCreateWithoutLikedByInput[] | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutLikedByInput[] | undefined;
    connect?: ExperienceWhereUniqueInput[] | undefined;
}
