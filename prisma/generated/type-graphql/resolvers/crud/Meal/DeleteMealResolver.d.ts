import { GraphQLResolveInfo } from "graphql";
import { DeleteMealArgs } from "./args/DeleteMealArgs";
import { Meal } from "../../../models/Meal";
export declare class DeleteMealResolver {
    deleteMeal(ctx: any, info: GraphQLResolveInfo, args: DeleteMealArgs): Promise<Meal | null>;
}
