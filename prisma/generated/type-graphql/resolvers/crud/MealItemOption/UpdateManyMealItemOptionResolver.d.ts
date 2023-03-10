import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMealItemOptionArgs } from "./args/UpdateManyMealItemOptionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMealItemOptionResolver {
    updateManyMealItemOption(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMealItemOptionArgs): Promise<AffectedRowsOutput>;
}
