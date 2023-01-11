import { UserCreateManyTenantInputEnvelope } from "../inputs/UserCreateManyTenantInputEnvelope";
import { UserCreateOrConnectWithoutTenantInput } from "../inputs/UserCreateOrConnectWithoutTenantInput";
import { UserCreateWithoutTenantInput } from "../inputs/UserCreateWithoutTenantInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutTenantInput {
    create?: UserCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput[] | undefined;
    createMany?: UserCreateManyTenantInputEnvelope | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
