import { GraphQLResolveInfo } from "graphql";
import { UpdateManyFeaturesArgs } from "./args/UpdateManyFeaturesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyFeaturesResolver {
    updateManyFeatures(ctx: any, info: GraphQLResolveInfo, args: UpdateManyFeaturesArgs): Promise<AffectedRowsOutput>;
}
