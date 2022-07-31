import { NotificationCountAggregate } from "../outputs/NotificationCountAggregate";
import { NotificationMaxAggregate } from "../outputs/NotificationMaxAggregate";
import { NotificationMinAggregate } from "../outputs/NotificationMinAggregate";
export declare class NotificationGroupBy {
    id: string;
    description: string;
    userId: string | null;
    actorId: string | null;
    entityId: string | null;
    hasBeenViewedBySubject: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: NotificationCountAggregate | null;
    _min: NotificationMinAggregate | null;
    _max: NotificationMaxAggregate | null;
}
