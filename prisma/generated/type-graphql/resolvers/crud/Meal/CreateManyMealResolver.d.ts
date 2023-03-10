import { GraphQLResolveInfo } from "graphql";
import { CreateManyMealArgs } from "./args/CreateManyMealArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMealResolver {
    createManyMeal(ctx: any, info: GraphQLResolveInfo, args: CreateManyMealArgs): Promise<AffectedRowsOutput>;
}
