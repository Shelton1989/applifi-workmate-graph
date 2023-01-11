import { UserCreateManyTenantInputEnvelope } from "../inputs/UserCreateManyTenantInputEnvelope";
import { UserCreateOrConnectWithoutTenantInput } from "../inputs/UserCreateOrConnectWithoutTenantInput";
import { UserCreateWithoutTenantInput } from "../inputs/UserCreateWithoutTenantInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutTenantInput } from "../inputs/UserUpdateManyWithWhereWithoutTenantInput";
import { UserUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/UserUpdateWithWhereUniqueWithoutTenantInput";
import { UserUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/UserUpsertWithWhereUniqueWithoutTenantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateManyWithoutTenantInput {
    create?: UserCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput[] | undefined;
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput[] | undefined;
    createMany?: UserCreateManyTenantInputEnvelope | undefined;
    set?: UserWhereUniqueInput[] | undefined;
    disconnect?: UserWhereUniqueInput[] | undefined;
    delete?: UserWhereUniqueInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
    update?: UserUpdateWithWhereUniqueWithoutTenantInput[] | undefined;
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput[] | undefined;
    deleteMany?: UserScalarWhereInput[] | undefined;
}
