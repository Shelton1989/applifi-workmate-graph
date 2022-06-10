import { NotificationSettingsOrderByWithRelationInput } from "../../../inputs/NotificationSettingsOrderByWithRelationInput";
import { NotificationSettingsWhereInput } from "../../../inputs/NotificationSettingsWhereInput";
import { NotificationSettingsWhereUniqueInput } from "../../../inputs/NotificationSettingsWhereUniqueInput";
export declare class AggregateNotificationSettingsArgs {
    where?: NotificationSettingsWhereInput | undefined;
    orderBy?: NotificationSettingsOrderByWithRelationInput[] | undefined;
    cursor?: NotificationSettingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
