import { NotificationSettingsCreateOrConnectWithoutUserInput } from "../inputs/NotificationSettingsCreateOrConnectWithoutUserInput";
import { NotificationSettingsCreateWithoutUserInput } from "../inputs/NotificationSettingsCreateWithoutUserInput";
import { NotificationSettingsWhereUniqueInput } from "../inputs/NotificationSettingsWhereUniqueInput";
export declare class NotificationSettingsCreateNestedOneWithoutUserInput {
    create?: NotificationSettingsCreateWithoutUserInput | undefined;
    connectOrCreate?: NotificationSettingsCreateOrConnectWithoutUserInput | undefined;
    connect?: NotificationSettingsWhereUniqueInput | undefined;
}
