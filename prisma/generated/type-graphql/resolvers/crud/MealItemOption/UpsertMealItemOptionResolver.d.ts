import { GraphQLResolveInfo } from "graphql";
import { UpsertMealItemOptionArgs } from "./args/UpsertMealItemOptionArgs";
import { MealItemOption } from "../../../models/MealItemOption";
export declare class UpsertMealItemOptionResolver {
    upsertMealItemOption(ctx: any, info: GraphQLResolveInfo, args: UpsertMealItemOptionArgs): Promise<MealItemOption>;
}
