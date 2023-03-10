import { GraphQLResolveInfo } from "graphql";
import { CreateManyMealItemOptionArgs } from "./args/CreateManyMealItemOptionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMealItemOptionResolver {
    createManyMealItemOption(ctx: any, info: GraphQLResolveInfo, args: CreateManyMealItemOptionArgs): Promise<AffectedRowsOutput>;
}
