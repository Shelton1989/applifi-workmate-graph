import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMealItemArgs } from "./args/UpdateManyMealItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMealItemResolver {
    updateManyMealItem(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMealItemArgs): Promise<AffectedRowsOutput>;
}
