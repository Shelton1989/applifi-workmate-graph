import { GraphQLResolveInfo } from "graphql";
import { UpdateMealItemArgs } from "./args/UpdateMealItemArgs";
import { MealItem } from "../../../models/MealItem";
export declare class UpdateMealItemResolver {
    updateMealItem(ctx: any, info: GraphQLResolveInfo, args: UpdateMealItemArgs): Promise<MealItem | null>;
}
