import { Comment } from "../../../models/Comment";
import { Reaction } from "../../../models/Reaction";
import { Reply } from "../../../models/Reply";
import { User } from "../../../models/User";
import { ReplyReactionsArgs } from "./args/ReplyReactionsArgs";
export declare class ReplyRelationsResolver {
    Comment(reply: Reply, ctx: any): Promise<Comment>;
    Author(reply: Reply, ctx: any): Promise<User>;
    Reactions(reply: Reply, ctx: any, args: ReplyReactionsArgs): Promise<Reaction[]>;
}
