import { UserCreateOrConnectWithoutNotificationsInput } from "../inputs/UserCreateOrConnectWithoutNotificationsInput";
import { UserCreateWithoutNotificationsInput } from "../inputs/UserCreateWithoutNotificationsInput";
import { UserUpdateWithoutNotificationsInput } from "../inputs/UserUpdateWithoutNotificationsInput";
import { UserUpsertWithoutNotificationsInput } from "../inputs/UserUpsertWithoutNotificationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutNotificationsInput {
    create?: UserCreateWithoutNotificationsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput | undefined;
    upsert?: UserUpsertWithoutNotificationsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutNotificationsInput | undefined;
}
