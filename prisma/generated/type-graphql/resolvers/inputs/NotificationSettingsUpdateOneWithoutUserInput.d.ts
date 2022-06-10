import { NotificationSettingsCreateOrConnectWithoutUserInput } from "../inputs/NotificationSettingsCreateOrConnectWithoutUserInput";
import { NotificationSettingsCreateWithoutUserInput } from "../inputs/NotificationSettingsCreateWithoutUserInput";
import { NotificationSettingsUpdateWithoutUserInput } from "../inputs/NotificationSettingsUpdateWithoutUserInput";
import { NotificationSettingsUpsertWithoutUserInput } from "../inputs/NotificationSettingsUpsertWithoutUserInput";
import { NotificationSettingsWhereUniqueInput } from "../inputs/NotificationSettingsWhereUniqueInput";
export declare class NotificationSettingsUpdateOneWithoutUserInput {
    create?: NotificationSettingsCreateWithoutUserInput | undefined;
    connectOrCreate?: NotificationSettingsCreateOrConnectWithoutUserInput | undefined;
    upsert?: NotificationSettingsUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: NotificationSettingsWhereUniqueInput | undefined;
    update?: NotificationSettingsUpdateWithoutUserInput | undefined;
}
