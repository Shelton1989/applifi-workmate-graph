import { UserCreateOrConnectWithoutNotificationSettingsInput } from "../inputs/UserCreateOrConnectWithoutNotificationSettingsInput";
import { UserCreateWithoutNotificationSettingsInput } from "../inputs/UserCreateWithoutNotificationSettingsInput";
import { UserUpdateWithoutNotificationSettingsInput } from "../inputs/UserUpdateWithoutNotificationSettingsInput";
import { UserUpsertWithoutNotificationSettingsInput } from "../inputs/UserUpsertWithoutNotificationSettingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutNotificationSettingsInput {
    create?: UserCreateWithoutNotificationSettingsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSettingsInput | undefined;
    upsert?: UserUpsertWithoutNotificationSettingsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutNotificationSettingsInput | undefined;
}
