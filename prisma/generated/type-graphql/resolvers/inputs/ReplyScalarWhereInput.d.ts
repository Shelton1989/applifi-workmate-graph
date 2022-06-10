import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ReplyScalarWhereInput {
    AND?: ReplyScalarWhereInput[] | undefined;
    OR?: ReplyScalarWhereInput[] | undefined;
    NOT?: ReplyScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    text?: StringFilter | undefined;
    commentId?: StringFilter | undefined;
    authorId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
