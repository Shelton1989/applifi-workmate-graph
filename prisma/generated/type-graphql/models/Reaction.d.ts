import { Comment } from "../models/Comment";
import { Post } from "../models/Post";
import { Reply } from "../models/Reply";
import { User } from "../models/User";
export declare class Reaction {
    id: string;
    type: "LIKE" | "LOVE" | "DISLIKE";
    Post?: Post | null;
    postId?: string | null;
    Comment?: Comment | null;
    commentId?: string | null;
    Reply?: Reply | null;
    replyId?: string | null;
    Author?: User;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}
