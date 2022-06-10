import { NotificationSettingsCreateInput } from "../../../inputs/NotificationSettingsCreateInput";
import { NotificationSettingsUpdateInput } from "../../../inputs/NotificationSettingsUpdateInput";
import { NotificationSettingsWhereUniqueInput } from "../../../inputs/NotificationSettingsWhereUniqueInput";
export declare class UpsertNotificationSettingsArgs {
    where: NotificationSettingsWhereUniqueInput;
    create: NotificationSettingsCreateInput;
    update: NotificationSettingsUpdateInput;
}
