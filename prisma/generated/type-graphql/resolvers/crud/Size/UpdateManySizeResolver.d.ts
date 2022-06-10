import { GraphQLResolveInfo } from "graphql";
import { UpdateManySizeArgs } from "./args/UpdateManySizeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySizeResolver {
    updateManySize(ctx: any, info: GraphQLResolveInfo, args: UpdateManySizeArgs): Promise<AffectedRowsOutput>;
}
