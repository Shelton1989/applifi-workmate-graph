import { Address } from "../../../models/Address";
import { Comment } from "../../../models/Comment";
import { Inventory } from "../../../models/Inventory";
import { Notification } from "../../../models/Notification";
import { NotificationSettings } from "../../../models/NotificationSettings";
import { Order } from "../../../models/Order";
import { Post } from "../../../models/Post";
import { Product } from "../../../models/Product";
import { Reaction } from "../../../models/Reaction";
import { Reply } from "../../../models/Reply";
import { Request } from "../../../models/Request";
import { User } from "../../../models/User";
import { UserActivityArgs } from "./args/UserActivityArgs";
import { UserAddressesArgs } from "./args/UserAddressesArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikedProductsArgs } from "./args/UserLikedProductsArgs";
import { UserMyOrdersArgs } from "./args/UserMyOrdersArgs";
import { UserNotificationsArgs } from "./args/UserNotificationsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserPurchaseOrdersArgs } from "./args/UserPurchaseOrdersArgs";
import { UserReactionsArgs } from "./args/UserReactionsArgs";
import { UserRepliesArgs } from "./args/UserRepliesArgs";
import { UserRequestsArgs } from "./args/UserRequestsArgs";
export declare class UserRelationsResolver {
    Addresses(user: User, ctx: any, args: UserAddressesArgs): Promise<Address[]>;
    NotificationSettings(user: User, ctx: any): Promise<NotificationSettings | null>;
    Notifications(user: User, ctx: any, args: UserNotificationsArgs): Promise<Notification[]>;
    Activity(user: User, ctx: any, args: UserActivityArgs): Promise<Notification[]>;
    Following(user: User, ctx: any, args: UserFollowingArgs): Promise<User[]>;
    Followers(user: User, ctx: any, args: UserFollowersArgs): Promise<User[]>;
    LikedProducts(user: User, ctx: any, args: UserLikedProductsArgs): Promise<Product[]>;
    Inventory(user: User, ctx: any): Promise<Inventory | null>;
    MyOrders(user: User, ctx: any, args: UserMyOrdersArgs): Promise<Order[]>;
    PurchaseOrders(user: User, ctx: any, args: UserPurchaseOrdersArgs): Promise<Order[]>;
    Requests(user: User, ctx: any, args: UserRequestsArgs): Promise<Request[]>;
    Posts(user: User, ctx: any, args: UserPostsArgs): Promise<Post[]>;
    Comments(user: User, ctx: any, args: UserCommentsArgs): Promise<Comment[]>;
    Replies(user: User, ctx: any, args: UserRepliesArgs): Promise<Reply[]>;
    Reactions(user: User, ctx: any, args: UserReactionsArgs): Promise<Reaction[]>;
}
