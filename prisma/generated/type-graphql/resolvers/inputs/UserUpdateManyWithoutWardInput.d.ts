import { UserCreateManyWardInputEnvelope } from "../inputs/UserCreateManyWardInputEnvelope";
import { UserCreateOrConnectWithoutWardInput } from "../inputs/UserCreateOrConnectWithoutWardInput";
import { UserCreateWithoutWardInput } from "../inputs/UserCreateWithoutWardInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutWardInput } from "../inputs/UserUpdateManyWithWhereWithoutWardInput";
import { UserUpdateWithWhereUniqueWithoutWardInput } from "../inputs/UserUpdateWithWhereUniqueWithoutWardInput";
import { UserUpsertWithWhereUniqueWithoutWardInput } from "../inputs/UserUpsertWithWhereUniqueWithoutWardInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutWardInput {
    create?: UserCreateWithoutWardInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutWardInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutWardInput[] | undefined;
    createMany?: UserCreateManyWardInputEnvelope | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutWardInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutWardInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
