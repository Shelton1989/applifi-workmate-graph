import { UserCreateOrConnectWithoutAddressesInput } from "../inputs/UserCreateOrConnectWithoutAddressesInput";
import { UserCreateWithoutAddressesInput } from "../inputs/UserCreateWithoutAddressesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAddressesInput {
    create?: UserCreateWithoutAddressesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
