import { UserCreateOrConnectWithoutAddressesInput } from "../inputs/UserCreateOrConnectWithoutAddressesInput";
import { UserCreateWithoutAddressesInput } from "../inputs/UserCreateWithoutAddressesInput";
import { UserUpdateWithoutAddressesInput } from "../inputs/UserUpdateWithoutAddressesInput";
import { UserUpsertWithoutAddressesInput } from "../inputs/UserUpsertWithoutAddressesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutAddressesInput {
    create?: UserCreateWithoutAddressesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput | undefined;
    upsert?: UserUpsertWithoutAddressesInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutAddressesInput | undefined;
}
