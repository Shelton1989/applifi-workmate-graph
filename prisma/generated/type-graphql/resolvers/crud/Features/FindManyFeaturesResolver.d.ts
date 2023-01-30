import { GraphQLResolveInfo } from "graphql";
import { FindManyFeaturesArgs } from "./args/FindManyFeaturesArgs";
import { Features } from "../../../models/Features";
export declare class FindManyFeaturesResolver {
    findManyFeatures(ctx: any, info: GraphQLResolveInfo, args: FindManyFeaturesArgs): Promise<Features[]>;
}
