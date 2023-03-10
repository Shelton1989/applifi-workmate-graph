import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMealItemOptionArgs } from "./args/DeleteManyMealItemOptionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMealItemOptionResolver {
    deleteManyMealItemOption(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMealItemOptionArgs): Promise<AffectedRowsOutput>;
}
