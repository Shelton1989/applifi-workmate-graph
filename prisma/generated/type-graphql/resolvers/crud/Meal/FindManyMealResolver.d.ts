import { GraphQLResolveInfo } from "graphql";
import { FindManyMealArgs } from "./args/FindManyMealArgs";
import { Meal } from "../../../models/Meal";
export declare class FindManyMealResolver {
    meals(ctx: any, info: GraphQLResolveInfo, args: FindManyMealArgs): Promise<Meal[]>;
}
