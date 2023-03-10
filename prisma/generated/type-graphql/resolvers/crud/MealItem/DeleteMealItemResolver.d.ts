import { GraphQLResolveInfo } from "graphql";
import { DeleteMealItemArgs } from "./args/DeleteMealItemArgs";
import { MealItem } from "../../../models/MealItem";
export declare class DeleteMealItemResolver {
    deleteMealItem(ctx: any, info: GraphQLResolveInfo, args: DeleteMealItemArgs): Promise<MealItem | null>;
}
