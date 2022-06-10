import { GraphQLResolveInfo } from "graphql";
import { DeleteManyInventoryArgs } from "./args/DeleteManyInventoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyInventoryResolver {
    deleteManyInventory(ctx: any, info: GraphQLResolveInfo, args: DeleteManyInventoryArgs): Promise<AffectedRowsOutput>;
}
