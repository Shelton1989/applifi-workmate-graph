import { GraphQLResolveInfo } from "graphql";
import { UpdateManyInventoryArgs } from "./args/UpdateManyInventoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyInventoryResolver {
    updateManyInventory(ctx: any, info: GraphQLResolveInfo, args: UpdateManyInventoryArgs): Promise<AffectedRowsOutput>;
}
