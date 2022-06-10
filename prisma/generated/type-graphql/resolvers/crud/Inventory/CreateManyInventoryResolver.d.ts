import { GraphQLResolveInfo } from "graphql";
import { CreateManyInventoryArgs } from "./args/CreateManyInventoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInventoryResolver {
    createManyInventory(ctx: any, info: GraphQLResolveInfo, args: CreateManyInventoryArgs): Promise<AffectedRowsOutput>;
}
