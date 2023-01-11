import { UserCreateOrConnectWithoutLikedExperiencesInput } from "../inputs/UserCreateOrConnectWithoutLikedExperiencesInput";
import { UserCreateWithoutLikedExperiencesInput } from "../inputs/UserCreateWithoutLikedExperiencesInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutLikedExperiencesInput } from "../inputs/UserUpdateManyWithWhereWithoutLikedExperiencesInput";
import { UserUpdateWithWhereUniqueWithoutLikedExperiencesInput } from "../inputs/UserUpdateWithWhereUniqueWithoutLikedExperiencesInput";
import { UserUpsertWithWhereUniqueWithoutLikedExperiencesInput } from "../inputs/UserUpsertWithWhereUniqueWithoutLikedExperiencesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutLikedExperiencesInput {
    create?: UserCreateWithoutLikedExperiencesInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLikedExperiencesInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutLikedExperiencesInput[] | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutLikedExperiencesInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutLikedExperiencesInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
