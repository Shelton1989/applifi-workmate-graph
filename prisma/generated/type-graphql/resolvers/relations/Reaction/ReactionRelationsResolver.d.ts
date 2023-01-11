import { Comment } from "../../../models/Comment";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { Reply } from "../../../models/Reply";
import { User } from "../../../models/User";
export declare class ReactionRelationsResolver {
    Post(reaction: Reaction, ctx: any): Promise<Post | null>;
    Comment(reaction: Reaction, ctx: any): Promise<Comment | null>;
    Reply(reaction: Reaction, ctx: any): Promise<Reply | null>;
    Author(reaction: Reaction, ctx: any): Promise<User>;
}
