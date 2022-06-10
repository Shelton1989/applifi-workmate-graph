import { UserCreateOrConnectWithoutFollowersInput } from "../inputs/UserCreateOrConnectWithoutFollowersInput";
import { UserCreateWithoutFollowersInput } from "../inputs/UserCreateWithoutFollowersInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutFollowersInput } from "../inputs/UserUpdateManyWithWhereWithoutFollowersInput";
import { UserUpdateWithWhereUniqueWithoutFollowersInput } from "../inputs/UserUpdateWithWhereUniqueWithoutFollowersInput";
import { UserUpsertWithWhereUniqueWithoutFollowersInput } from "../inputs/UserUpsertWithWhereUniqueWithoutFollowersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutFollowersInput {
    create?: UserCreateWithoutFollowersInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutFollowersInput[] | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutFollowersInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutFollowersInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
