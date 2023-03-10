import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMealItemOptionArgs } from "./args/FindUniqueMealItemOptionArgs";
import { MealItemOption } from "../../../models/MealItemOption";
export declare class FindUniqueMealItemOptionResolver {
    mealItemOption(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMealItemOptionArgs): Promise<MealItemOption | null>;
}
