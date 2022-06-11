import { Address } from "../../../models/Address";
import { Comment } from "../../../models/Comment";
import { Inventory } from "../../../models/Inventory";
import { NotificationSettings } from "../../../models/NotificationSettings";
import { Order } from "../../../models/Order";
import { Post } from "../../../models/Post";
import { Product } from "../../../models/Product";
import { Reaction } from "../../../models/Reaction";
import { Reply } from "../../../models/Reply";
import { User } from "../../../models/User";
import { UserAddressesArgs } from "./args/UserAddressesArgs";
import { UserCommentsArgs } from "./args/UserCommentsArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserLikedProductsArgs } from "./args/UserLikedProductsArgs";
import { UserPostsArgs } from "./args/UserPostsArgs";
import { UserReactionsArgs } from "./args/UserReactionsArgs";
import { UserRepliesArgs } from "./args/UserRepliesArgs";
export declare class UserRelationsResolver {
    Addresses(user: User, ctx: any, args: UserAddressesArgs): Promise<Address[]>;
    NotificationSettings(user: User, ctx: any): Promise<NotificationSettings | null>;
    Following(user: User, ctx: any, args: UserFollowingArgs): Promise<User[]>;
    Followers(user: User, ctx: any, args: UserFollowersArgs): Promise<User[]>;
    Order(user: User, ctx: any): Promise<Order | null>;
    LikedProducts(user: User, ctx: any, args: UserLikedProductsArgs): Promise<Product[]>;
    Inventory(user: User, ctx: any): Promise<Inventory | null>;
    Posts(user: User, ctx: any, args: UserPostsArgs): Promise<Post[]>;
    Comments(user: User, ctx: any, args: UserCommentsArgs): Promise<Comment[]>;
    Replies(user: User, ctx: any, args: UserRepliesArgs): Promise<Reply[]>;
    Reactions(user: User, ctx: any, args: UserReactionsArgs): Promise<Reaction[]>;
}