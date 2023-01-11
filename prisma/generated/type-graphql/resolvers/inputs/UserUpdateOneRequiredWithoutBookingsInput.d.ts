import { UserCreateOrConnectWithoutBookingsInput } from "../inputs/UserCreateOrConnectWithoutBookingsInput";
import { UserCreateWithoutBookingsInput } from "../inputs/UserCreateWithoutBookingsInput";
import { UserUpdateWithoutBookingsInput } from "../inputs/UserUpdateWithoutBookingsInput";
import { UserUpsertWithoutBookingsInput } from "../inputs/UserUpsertWithoutBookingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutBookingsInput {
    create?: UserCreateWithoutBookingsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput | undefined;
    upsert?: UserUpsertWithoutBookingsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutBookingsInput | undefined;
}
