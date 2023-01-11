import { BookingOrder } from "../../../models/BookingOrder";
import { Comment } from "../../../models/Comment";
import { Experience } from "../../../models/Experience";
import { Notification } from "../../../models/Notification";
import { NotificationSettings } from "../../../models/NotificationSettings";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { Reply } from "../../../models/Reply";
import { Request } from "../../../models/Request";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { UserActivityArgs } from "./args/UserActivityArgs";
import { UserBookingsArgs } from "./args/UserBookingsArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikedExperiencesArgs } from "./args/UserLikedExperiencesArgs";
import { UserNotificationsArgs } from "./args/UserNotificationsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserReactionsArgs } from "./args/UserReactionsArgs";
import { UserRepliesArgs } from "./args/UserRepliesArgs";
import { UserRequestsArgs } from "./args/UserRequestsArgs";
export declare class UserRelationsResolver {
    Tenant(user: User, ctx: any): Promise<Tenant | null>;
    NotificationSettings(user: User, ctx: any): Promise<NotificationSettings | null>;
    Notifications(user: User, ctx: any, args: UserNotificationsArgs): Promise<Notification[]>;
    Activity(user: User, ctx: any, args: UserActivityArgs): Promise<Notification[]>;
    Following(user: User, ctx: any, args: UserFollowingArgs): Promise<User[]>;
    Followers(user: User, ctx: any, args: UserFollowersArgs): Promise<User[]>;
    LikedExperiences(user: User, ctx: any, args: UserLikedExperiencesArgs): Promise<Experience[]>;
    Requests(user: User, ctx: any, args: UserRequestsArgs): Promise<Request[]>;
    Posts(user: User, ctx: any, args: UserPostsArgs): Promise<Post[]>;
    Comments(user: User, ctx: any, args: UserCommentsArgs): Promise<Comment[]>;
    Replies(user: User, ctx: any, args: UserRepliesArgs): Promise<Reply[]>;
    Reactions(user: User, ctx: any, args: UserReactionsArgs): Promise<Reaction[]>;
    Bookings(user: User, ctx: any, args: UserBookingsArgs): Promise<BookingOrder[]>;
}
