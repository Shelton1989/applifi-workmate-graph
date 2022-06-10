import { UserCreateOrConnectWithoutNotificationSettingsInput } from "../inputs/UserCreateOrConnectWithoutNotificationSettingsInput";
import { UserCreateWithoutNotificationSettingsInput } from "../inputs/UserCreateWithoutNotificationSettingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutNotificationSettingsInput {
    create?: UserCreateWithoutNotificationSettingsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutNotificationSettingsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
