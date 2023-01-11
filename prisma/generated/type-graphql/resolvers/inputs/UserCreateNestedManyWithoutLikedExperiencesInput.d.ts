import { UserCreateOrConnectWithoutLikedExperiencesInput } from "../inputs/UserCreateOrConnectWithoutLikedExperiencesInput";
import { UserCreateWithoutLikedExperiencesInput } from "../inputs/UserCreateWithoutLikedExperiencesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutLikedExperiencesInput {
    create?: UserCreateWithoutLikedExperiencesInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLikedExperiencesInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
