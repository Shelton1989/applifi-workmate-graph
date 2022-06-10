import { UserCreateOrConnectWithoutFollowingInput } from "../inputs/UserCreateOrConnectWithoutFollowingInput";
import { UserCreateWithoutFollowingInput } from "../inputs/UserCreateWithoutFollowingInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutFollowingInput } from "../inputs/UserUpdateManyWithWhereWithoutFollowingInput";
import { UserUpdateWithWhereUniqueWithoutFollowingInput } from "../inputs/UserUpdateWithWhereUniqueWithoutFollowingInput";
import { UserUpsertWithWhereUniqueWithoutFollowingInput } from "../inputs/UserUpsertWithWhereUniqueWithoutFollowingInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutFollowingInput {
    create?: UserCreateWithoutFollowingInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutFollowingInput[] | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutFollowingInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutFollowingInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
