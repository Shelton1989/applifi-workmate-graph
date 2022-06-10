import { UserCreateOrConnectWithoutOrderInput } from "../inputs/UserCreateOrConnectWithoutOrderInput";
import { UserCreateWithoutOrderInput } from "../inputs/UserCreateWithoutOrderInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutOrderInput {
    create?: UserCreateWithoutOrderInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
