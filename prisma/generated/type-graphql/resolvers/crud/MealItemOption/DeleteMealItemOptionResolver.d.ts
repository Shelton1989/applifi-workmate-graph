import { GraphQLResolveInfo } from "graphql";
import { DeleteMealItemOptionArgs } from "./args/DeleteMealItemOptionArgs";
import { MealItemOption } from "../../../models/MealItemOption";
export declare class DeleteMealItemOptionResolver {
    deleteMealItemOption(ctx: any, info: GraphQLResolveInfo, args: DeleteMealItemOptionArgs): Promise<MealItemOption | null>;
}
