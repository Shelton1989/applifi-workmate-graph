import { UserCreateOrConnectWithoutRepliesInput } from "../inputs/UserCreateOrConnectWithoutRepliesInput";
import { UserCreateWithoutRepliesInput } from "../inputs/UserCreateWithoutRepliesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutRepliesInput {
    create?: UserCreateWithoutRepliesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
