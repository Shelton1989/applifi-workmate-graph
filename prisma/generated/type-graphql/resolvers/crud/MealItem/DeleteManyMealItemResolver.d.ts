import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMealItemArgs } from "./args/DeleteManyMealItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMealItemResolver {
    deleteManyMealItem(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMealItemArgs): Promise<AffectedRowsOutput>;
}
