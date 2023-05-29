import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DocumentRelationFilter } from "../inputs/DocumentRelationFilter";
import { ReactionListRelationFilter } from "../inputs/ReactionListRelationFilter";
import { ReplyListRelationFilter } from "../inputs/ReplyListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class CommentWhereInput {
    AND?: CommentWhereInput[] | undefined;
    OR?: CommentWhereInput[] | undefined;
    NOT?: CommentWhereInput[] | undefined;
    id?: StringFilter | undefined;
    text?: StringFilter | undefined;
    Document?: DocumentRelationFilter | undefined;
    documentId?: StringFilter | undefined;
    Author?: UserRelationFilter | undefined;
    authorId?: StringFilter | undefined;
    Replies?: ReplyListRelationFilter | undefined;
    Reactions?: ReactionListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
