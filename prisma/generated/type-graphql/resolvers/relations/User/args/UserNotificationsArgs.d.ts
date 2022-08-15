import { NotificationOrderByWithRelationInput } from "../../../inputs/NotificationOrderByWithRelationInput";
import { NotificationWhereInput } from "../../../inputs/NotificationWhereInput";
import { NotificationWhereUniqueInput } from "../../../inputs/NotificationWhereUniqueInput";
export declare class UserNotificationsArgs {
    where?: NotificationWhereInput | undefined;
    orderBy?: NotificationOrderByWithRelationInput[] | undefined;
    cursor?: NotificationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "description" | "userId" | "actorId" | "entityId" | "hasBeenViewedBySubject" | "link" | "mediaLink" | "createdAt" | "updatedAt"> | undefined;
}
