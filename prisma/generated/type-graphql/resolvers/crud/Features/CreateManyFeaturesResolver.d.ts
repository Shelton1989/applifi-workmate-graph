import { GraphQLResolveInfo } from "graphql";
import { CreateManyFeaturesArgs } from "./args/CreateManyFeaturesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyFeaturesResolver {
    createManyFeatures(ctx: any, info: GraphQLResolveInfo, args: CreateManyFeaturesArgs): Promise<AffectedRowsOutput>;
}
