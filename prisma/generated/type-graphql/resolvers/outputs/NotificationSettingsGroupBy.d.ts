import { NotificationSettingsCountAggregate } from "../outputs/NotificationSettingsCountAggregate";
import { NotificationSettingsMaxAggregate } from "../outputs/NotificationSettingsMaxAggregate";
import { NotificationSettingsMinAggregate } from "../outputs/NotificationSettingsMinAggregate";
export declare class NotificationSettingsGroupBy {
    id: string;
    newContentILike: boolean;
    commentsOnMyReviews: boolean;
    repliesToMyComments: boolean;
    repliesToThreads: boolean;
    userId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: NotificationSettingsCountAggregate | null;
    _min: NotificationSettingsMinAggregate | null;
    _max: NotificationSettingsMaxAggregate | null;
}
