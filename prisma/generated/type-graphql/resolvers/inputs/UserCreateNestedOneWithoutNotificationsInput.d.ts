import { UserCreateOrConnectWithoutNotificationsInput } from "../inputs/UserCreateOrConnectWithoutNotificationsInput";
import { UserCreateWithoutNotificationsInput } from "../inputs/UserCreateWithoutNotificationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutNotificationsInput {
    create?: UserCreateWithoutNotificationsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
