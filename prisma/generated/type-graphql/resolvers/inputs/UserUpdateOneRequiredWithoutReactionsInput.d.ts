import { UserCreateOrConnectWithoutReactionsInput } from "../inputs/UserCreateOrConnectWithoutReactionsInput";
import { UserCreateWithoutReactionsInput } from "../inputs/UserCreateWithoutReactionsInput";
import { UserUpdateWithoutReactionsInput } from "../inputs/UserUpdateWithoutReactionsInput";
import { UserUpsertWithoutReactionsInput } from "../inputs/UserUpsertWithoutReactionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutReactionsInput {
    create?: UserCreateWithoutReactionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput | undefined;
    upsert?: UserUpsertWithoutReactionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutReactionsInput | undefined;
}
