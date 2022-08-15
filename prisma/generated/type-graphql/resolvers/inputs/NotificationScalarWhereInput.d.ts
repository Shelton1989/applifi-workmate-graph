import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class NotificationScalarWhereInput {
    AND?: NotificationScalarWhereInput[] | undefined;
    OR?: NotificationScalarWhereInput[] | undefined;
    NOT?: NotificationScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    description?: StringFilter | undefined;
    userId?: StringNullableFilter | undefined;
    actorId?: StringNullableFilter | undefined;
    entityId?: StringNullableFilter | undefined;
    hasBeenViewedBySubject?: BoolFilter | undefined;
    link?: StringNullableFilter | undefined;
    mediaLink?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
