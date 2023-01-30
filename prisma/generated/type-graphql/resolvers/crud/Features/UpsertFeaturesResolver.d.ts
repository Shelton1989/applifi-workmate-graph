import { GraphQLResolveInfo } from "graphql";
import { UpsertFeaturesArgs } from "./args/UpsertFeaturesArgs";
import { Features } from "../../../models/Features";
export declare class UpsertFeaturesResolver {
    upsertFeatures(ctx: any, info: GraphQLResolveInfo, args: UpsertFeaturesArgs): Promise<Features>;
}
