import { UserCreateOrConnectWithoutMyOrdersInput } from "../inputs/UserCreateOrConnectWithoutMyOrdersInput";
import { UserCreateWithoutMyOrdersInput } from "../inputs/UserCreateWithoutMyOrdersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutMyOrdersInput {
    create?: UserCreateWithoutMyOrdersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMyOrdersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
