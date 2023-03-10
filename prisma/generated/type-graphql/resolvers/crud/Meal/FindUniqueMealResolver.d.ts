import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMealArgs } from "./args/FindUniqueMealArgs";
import { Meal } from "../../../models/Meal";
export declare class FindUniqueMealResolver {
    meal(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMealArgs): Promise<Meal | null>;
}
