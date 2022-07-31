import { UserCreateOrConnectWithoutActivityInput } from "../inputs/UserCreateOrConnectWithoutActivityInput";
import { UserCreateWithoutActivityInput } from "../inputs/UserCreateWithoutActivityInput";
import { UserUpdateWithoutActivityInput } from "../inputs/UserUpdateWithoutActivityInput";
import { UserUpsertWithoutActivityInput } from "../inputs/UserUpsertWithoutActivityInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutActivityInput {
    create?: UserCreateWithoutActivityInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutActivityInput | undefined;
    upsert?: UserUpsertWithoutActivityInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutActivityInput | undefined;
}
