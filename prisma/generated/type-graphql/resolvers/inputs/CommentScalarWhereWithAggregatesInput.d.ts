import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CommentScalarWhereWithAggregatesInput {
    AND?: CommentScalarWhereWithAggregatesInput[] | undefined;
    OR?: CommentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CommentScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    text?: StringWithAggregatesFilter | undefined;
    documentId?: StringWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
