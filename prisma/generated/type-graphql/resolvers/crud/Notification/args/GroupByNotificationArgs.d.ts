import { NotificationOrderByWithAggregationInput } from "../../../inputs/NotificationOrderByWithAggregationInput";
import { NotificationScalarWhereWithAggregatesInput } from "../../../inputs/NotificationScalarWhereWithAggregatesInput";
import { NotificationWhereInput } from "../../../inputs/NotificationWhereInput";
export declare class GroupByNotificationArgs {
    where?: NotificationWhereInput | undefined;
    orderBy?: NotificationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "description" | "userId" | "actorId" | "entityId" | "hasBeenViewedBySubject" | "link" | "mediaLink" | "createdAt" | "updatedAt">;
    having?: NotificationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
