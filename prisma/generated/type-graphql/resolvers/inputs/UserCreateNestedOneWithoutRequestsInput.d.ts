import { UserCreateOrConnectWithoutRequestsInput } from "../inputs/UserCreateOrConnectWithoutRequestsInput";
import { UserCreateWithoutRequestsInput } from "../inputs/UserCreateWithoutRequestsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutRequestsInput {
    create?: UserCreateWithoutRequestsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
