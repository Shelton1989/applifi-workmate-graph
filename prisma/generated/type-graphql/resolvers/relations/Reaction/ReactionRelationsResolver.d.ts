import { Comment } from "../../../models/Comment";
import { Reaction } from "../../../models/Reaction";
import { Reply } from "../../../models/Reply";
import { User } from "../../../models/User";
export declare class ReactionRelationsResolver {
    Comment(reaction: Reaction, ctx: any): Promise<Comment | null>;
    Reply(reaction: Reaction, ctx: any): Promise<Reply | null>;
    Author(reaction: Reaction, ctx: any): Promise<User>;
}
