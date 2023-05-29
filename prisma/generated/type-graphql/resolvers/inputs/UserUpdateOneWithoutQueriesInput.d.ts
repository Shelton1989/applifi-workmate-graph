import { UserCreateOrConnectWithoutQueriesInput } from "../inputs/UserCreateOrConnectWithoutQueriesInput";
import { UserCreateWithoutQueriesInput } from "../inputs/UserCreateWithoutQueriesInput";
import { UserUpdateWithoutQueriesInput } from "../inputs/UserUpdateWithoutQueriesInput";
import { UserUpsertWithoutQueriesInput } from "../inputs/UserUpsertWithoutQueriesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutQueriesInput {
    create?: UserCreateWithoutQueriesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutQueriesInput | undefined;
    upsert?: UserUpsertWithoutQueriesInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutQueriesInput | undefined;
}
