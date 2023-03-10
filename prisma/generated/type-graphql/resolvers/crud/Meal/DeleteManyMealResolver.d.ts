import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMealArgs } from "./args/DeleteManyMealArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMealResolver {
    deleteManyMeal(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMealArgs): Promise<AffectedRowsOutput>;
}
