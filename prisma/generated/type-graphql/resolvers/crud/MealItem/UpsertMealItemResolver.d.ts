import { GraphQLResolveInfo } from "graphql";
import { UpsertMealItemArgs } from "./args/UpsertMealItemArgs";
import { MealItem } from "../../../models/MealItem";
export declare class UpsertMealItemResolver {
    upsertMealItem(ctx: any, info: GraphQLResolveInfo, args: UpsertMealItemArgs): Promise<MealItem>;
}
