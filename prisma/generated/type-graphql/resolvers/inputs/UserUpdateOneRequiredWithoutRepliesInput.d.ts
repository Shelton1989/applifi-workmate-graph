import { UserCreateOrConnectWithoutRepliesInput } from "../inputs/UserCreateOrConnectWithoutRepliesInput";
import { UserCreateWithoutRepliesInput } from "../inputs/UserCreateWithoutRepliesInput";
import { UserUpdateWithoutRepliesInput } from "../inputs/UserUpdateWithoutRepliesInput";
import { UserUpsertWithoutRepliesInput } from "../inputs/UserUpsertWithoutRepliesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutRepliesInput {
    create?: UserCreateWithoutRepliesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput | undefined;
    upsert?: UserUpsertWithoutRepliesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutRepliesInput | undefined;
}
