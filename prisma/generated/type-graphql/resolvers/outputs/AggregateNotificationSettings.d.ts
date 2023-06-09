import { NotificationSettingsCountAggregate } from "../outputs/NotificationSettingsCountAggregate";
import { NotificationSettingsMaxAggregate } from "../outputs/NotificationSettingsMaxAggregate";
import { NotificationSettingsMinAggregate } from "../outputs/NotificationSettingsMinAggregate";
export declare class AggregateNotificationSettings {
    _count: NotificationSettingsCountAggregate | null;
    _min: NotificationSettingsMinAggregate | null;
    _max: NotificationSettingsMaxAggregate | null;
}
