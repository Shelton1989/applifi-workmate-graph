import { UserCreateOrConnectWithoutReactionsInput } from "../inputs/UserCreateOrConnectWithoutReactionsInput";
import { UserCreateWithoutReactionsInput } from "../inputs/UserCreateWithoutReactionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutReactionsInput {
    create?: UserCreateWithoutReactionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
