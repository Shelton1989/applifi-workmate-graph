import { Comment } from "../../../models/Comment";
import { Notification } from "../../../models/Notification";
import { NotificationSettings } from "../../../models/NotificationSettings";
import { Query } from "../../../models/Query";
import { Reaction } from "../../../models/Reaction";
import { Reply } from "../../../models/Reply";
import { Request } from "../../../models/Request";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { UserActivityArgs } from "./args/UserActivityArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserNotificationsArgs } from "./args/UserNotificationsArgs";
import { UserQueriesArgs } from "./args/UserQueriesArgs";
import { UserReactionsArgs } from "./args/UserReactionsArgs";
import { UserRepliesArgs } from "./args/UserRepliesArgs";
import { UserRequestsArgs } from "./args/UserRequestsArgs";
export declare class UserRelationsResolver {
    Tenant(user: User, ctx: any): Promise<Tenant | null>;
    NotificationSettings(user: User, ctx: any): Promise<NotificationSettings | null>;
    Notifications(user: User, ctx: any, args: UserNotificationsArgs): Promise<Notification[]>;
    Activity(user: User, ctx: any, args: UserActivityArgs): Promise<Notification[]>;
    Queries(user: User, ctx: any, args: UserQueriesArgs): Promise<Query[]>;
    Requests(user: User, ctx: any, args: UserRequestsArgs): Promise<Request[]>;
    Comments(user: User, ctx: any, args: UserCommentsArgs): Promise<Comment[]>;
    Replies(user: User, ctx: any, args: UserRepliesArgs): Promise<Reply[]>;
    Reactions(user: User, ctx: any, args: UserReactionsArgs): Promise<Reaction[]>;
}
