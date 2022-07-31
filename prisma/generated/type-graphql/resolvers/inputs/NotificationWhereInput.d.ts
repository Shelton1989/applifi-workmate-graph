import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class NotificationWhereInput {
    AND?: NotificationWhereInput[] | undefined;
    OR?: NotificationWhereInput[] | undefined;
    NOT?: NotificationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    description?: StringFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
    Actor?: UserRelationFilter | undefined;
    actorId?: StringNullableFilter | undefined;
    entityId?: StringNullableFilter | undefined;
    hasBeenViewedBySubject?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
