import { GraphQLResolveInfo } from "graphql";
import { FindFirstFeaturesArgs } from "./args/FindFirstFeaturesArgs";
import { Features } from "../../../models/Features";
export declare class FindFirstFeaturesResolver {
    findFirstFeatures(ctx: any, info: GraphQLResolveInfo, args: FindFirstFeaturesArgs): Promise<Features | null>;
}
