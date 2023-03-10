import { GraphQLResolveInfo } from "graphql";
import { CreateManyMealItemArgs } from "./args/CreateManyMealItemArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMealItemResolver {
    createManyMealItem(ctx: any, info: GraphQLResolveInfo, args: CreateManyMealItemArgs): Promise<AffectedRowsOutput>;
}
