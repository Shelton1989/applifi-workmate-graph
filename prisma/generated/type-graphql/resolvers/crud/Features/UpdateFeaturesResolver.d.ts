import { GraphQLResolveInfo } from "graphql";
import { UpdateFeaturesArgs } from "./args/UpdateFeaturesArgs";
import { Features } from "../../../models/Features";
export declare class UpdateFeaturesResolver {
    updateFeatures(ctx: any, info: GraphQLResolveInfo, args: UpdateFeaturesArgs): Promise<Features | null>;
}
