import { UserCreateOrConnectWithoutQueriesInput } from "../inputs/UserCreateOrConnectWithoutQueriesInput";
import { UserCreateWithoutQueriesInput } from "../inputs/UserCreateWithoutQueriesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutQueriesInput {
    create?: UserCreateWithoutQueriesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutQueriesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
