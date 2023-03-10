import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMealArgs } from "./args/UpdateManyMealArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMealResolver {
    updateManyMeal(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMealArgs): Promise<AffectedRowsOutput>;
}
