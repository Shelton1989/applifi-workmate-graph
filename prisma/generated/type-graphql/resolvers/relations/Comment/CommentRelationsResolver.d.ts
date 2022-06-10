import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { Reply } from "../../../models/Reply";
import { User } from "../../../models/User";
import { CommentReactionsArgs } from "./args/CommentReactionsArgs";
import { CommentRepliesArgs } from "./args/CommentRepliesArgs";
export declare class CommentRelationsResolver {
    Post(comment: Comment, ctx: any): Promise<Post>;
    Author(comment: Comment, ctx: any): Promise<User>;
    Replies(comment: Comment, ctx: any, args: CommentRepliesArgs): Promise<Reply[]>;
    Reactions(comment: Comment, ctx: any, args: CommentReactionsArgs): Promise<Reaction[]>;
}
