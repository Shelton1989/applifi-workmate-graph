import { Comment } from "../models/Comment";
import { Reaction } from "../models/Reaction";
import { User } from "../models/User";
import { ReplyCount } from "../resolvers/outputs/ReplyCount";
export declare class Reply {
    id: string;
    text: string;
    Comment?: Comment;
    commentId: string;
    Author?: User;
    authorId: string;
    Reactions?: Reaction[];
    createdAt: Date;
    updatedAt: Date;
    _count?: ReplyCount | null;
}
