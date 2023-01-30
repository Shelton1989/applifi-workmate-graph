import { GraphQLResolveInfo } from "graphql";
import { DeleteManyFeaturesArgs } from "./args/DeleteManyFeaturesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyFeaturesResolver {
    deleteManyFeatures(ctx: any, info: GraphQLResolveInfo, args: DeleteManyFeaturesArgs): Promise<AffectedRowsOutput>;
}
