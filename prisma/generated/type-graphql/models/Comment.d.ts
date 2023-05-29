import { Document } from "../models/Document";
import { Reaction } from "../models/Reaction";
import { Reply } from "../models/Reply";
import { User } from "../models/User";
import { CommentCount } from "../resolvers/outputs/CommentCount";
export declare class Comment {
    id: string;
    text: string;
    Document?: Document;
    documentId: string;
    Author?: User;
    authorId: string;
    Replies?: Reply[];
    Reactions?: Reaction[];
    createdAt: Date;
    updatedAt: Date;
    _count?: CommentCount | null;
}
