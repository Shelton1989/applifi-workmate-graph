import { UserCreateOrConnectWithoutActivityInput } from "../inputs/UserCreateOrConnectWithoutActivityInput";
import { UserCreateWithoutActivityInput } from "../inputs/UserCreateWithoutActivityInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutActivityInput {
    create?: UserCreateWithoutActivityInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActivityInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
