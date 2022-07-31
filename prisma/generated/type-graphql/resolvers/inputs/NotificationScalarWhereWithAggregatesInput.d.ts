import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class NotificationScalarWhereWithAggregatesInput {
    AND?: NotificationScalarWhereWithAggregatesInput[] | undefined;
    OR?: NotificationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: NotificationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
    actorId?: StringNullableWithAggregatesFilter | undefined;
    entityId?: StringNullableWithAggregatesFilter | undefined;
    hasBeenViewedBySubject?: BoolWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
