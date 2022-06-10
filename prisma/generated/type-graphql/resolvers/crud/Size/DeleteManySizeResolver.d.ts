import { GraphQLResolveInfo } from "graphql";
import { DeleteManySizeArgs } from "./args/DeleteManySizeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySizeResolver {
    deleteManySize(ctx: any, info: GraphQLResolveInfo, args: DeleteManySizeArgs): Promise<AffectedRowsOutput>;
}
