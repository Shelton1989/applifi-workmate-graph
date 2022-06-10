import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ReplyScalarWhereWithAggregatesInput {
    AND?: ReplyScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReplyScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReplyScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    text?: StringWithAggregatesFilter | undefined;
    commentId?: StringWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
