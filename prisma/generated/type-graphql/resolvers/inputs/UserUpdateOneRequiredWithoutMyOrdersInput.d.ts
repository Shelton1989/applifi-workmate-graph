import { UserCreateOrConnectWithoutMyOrdersInput } from "../inputs/UserCreateOrConnectWithoutMyOrdersInput";
import { UserCreateWithoutMyOrdersInput } from "../inputs/UserCreateWithoutMyOrdersInput";
import { UserUpdateWithoutMyOrdersInput } from "../inputs/UserUpdateWithoutMyOrdersInput";
import { UserUpsertWithoutMyOrdersInput } from "../inputs/UserUpsertWithoutMyOrdersInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutMyOrdersInput {
    create?: UserCreateWithoutMyOrdersInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutMyOrdersInput | undefined;
    upsert?: UserUpsertWithoutMyOrdersInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutMyOrdersInput | undefined;
}
