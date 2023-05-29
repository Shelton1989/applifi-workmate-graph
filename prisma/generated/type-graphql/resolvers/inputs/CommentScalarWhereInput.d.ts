import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CommentScalarWhereInput {
    AND?: CommentScalarWhereInput[] | undefined;
    OR?: CommentScalarWhereInput[] | undefined;
    NOT?: CommentScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    text?: StringFilter | undefined;
    documentId?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
