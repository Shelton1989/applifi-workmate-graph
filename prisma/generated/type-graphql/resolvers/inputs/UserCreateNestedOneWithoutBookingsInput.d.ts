import { UserCreateOrConnectWithoutBookingsInput } from "../inputs/UserCreateOrConnectWithoutBookingsInput";
import { UserCreateWithoutBookingsInput } from "../inputs/UserCreateWithoutBookingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutBookingsInput {
    create?: UserCreateWithoutBookingsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
