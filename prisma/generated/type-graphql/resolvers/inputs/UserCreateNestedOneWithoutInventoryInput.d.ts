import { UserCreateOrConnectWithoutInventoryInput } from "../inputs/UserCreateOrConnectWithoutInventoryInput";
import { UserCreateWithoutInventoryInput } from "../inputs/UserCreateWithoutInventoryInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutInventoryInput {
    create?: UserCreateWithoutInventoryInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutInventoryInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
