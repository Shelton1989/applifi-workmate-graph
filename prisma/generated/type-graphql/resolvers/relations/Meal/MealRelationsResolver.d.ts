import { AggregateRating } from "../../../models/AggregateRating";
import { Features } from "../../../models/Features";
import { Meal } from "../../../models/Meal";
import { MealAvailability } from "../../../models/MealAvailability";
import { MealItem } from "../../../models/MealItem";
import { Order } from "../../../models/Order";
import { Post } from "../../../models/Post";
import { Reaction } from "../../../models/Reaction";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { MealAvailabilityArgs } from "./args/MealAvailabilityArgs";
import { MealFeaturesArgs } from "./args/MealFeaturesArgs";
import { MealItemsArgs } from "./args/MealItemsArgs";
import { MealLikedByArgs } from "./args/MealLikedByArgs";
import { MealOrdersArgs } from "./args/MealOrdersArgs";
import { MealPostsArgs } from "./args/MealPostsArgs";
import { MealReactionsArgs } from "./args/MealReactionsArgs";
export declare class MealRelationsResolver {
    Tenant(meal: Meal, ctx: any): Promise<Tenant>;
    Items(meal: Meal, ctx: any, args: MealItemsArgs): Promise<MealItem[]>;
    Availability(meal: Meal, ctx: any, args: MealAvailabilityArgs): Promise<MealAvailability[]>;
    Orders(meal: Meal, ctx: any, args: MealOrdersArgs): Promise<Order[]>;
    AggregateRating(meal: Meal, ctx: any): Promise<AggregateRating | null>;
    LikedBy(meal: Meal, ctx: any, args: MealLikedByArgs): Promise<User[]>;
    Posts(meal: Meal, ctx: any, args: MealPostsArgs): Promise<Post[]>;
    Features(meal: Meal, ctx: any, args: MealFeaturesArgs): Promise<Features[]>;
    Reactions(meal: Meal, ctx: any, args: MealReactionsArgs): Promise<Reaction[]>;
}
