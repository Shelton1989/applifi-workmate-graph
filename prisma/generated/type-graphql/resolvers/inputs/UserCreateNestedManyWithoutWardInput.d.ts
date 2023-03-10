import { UserCreateManyWardInputEnvelope } from "../inputs/UserCreateManyWardInputEnvelope";
import { UserCreateOrConnectWithoutWardInput } from "../inputs/UserCreateOrConnectWithoutWardInput";
import { UserCreateWithoutWardInput } from "../inputs/UserCreateWithoutWardInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutWardInput {
    create?: UserCreateWithoutWardInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutWardInput[] | undefined;
    createMany?: UserCreateManyWardInputEnvelope | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
