import { GraphQLResolveInfo } from "graphql";
import { UpdateMealItemOptionArgs } from "./args/UpdateMealItemOptionArgs";
import { MealItemOption } from "../../../models/MealItemOption";
export declare class UpdateMealItemOptionResolver {
    updateMealItemOption(ctx: any, info: GraphQLResolveInfo, args: UpdateMealItemOptionArgs): Promise<MealItemOption | null>;
}
