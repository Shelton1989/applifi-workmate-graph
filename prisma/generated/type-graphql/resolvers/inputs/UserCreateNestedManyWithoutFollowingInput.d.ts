import { UserCreateOrConnectWithoutFollowingInput } from "../inputs/UserCreateOrConnectWithoutFollowingInput";
import { UserCreateWithoutFollowingInput } from "../inputs/UserCreateWithoutFollowingInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedManyWithoutFollowingInput {
    create?: UserCreateWithoutFollowingInput[] | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput[] | undefined;
    connect?: UserWhereUniqueInput[] | undefined;
}
