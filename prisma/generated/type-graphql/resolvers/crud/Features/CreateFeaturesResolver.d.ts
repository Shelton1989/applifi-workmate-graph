import { GraphQLResolveInfo } from "graphql";
import { CreateFeaturesArgs } from "./args/CreateFeaturesArgs";
import { Features } from "../../../models/Features";
export declare class CreateFeaturesResolver {
    createFeatures(ctx: any, info: GraphQLResolveInfo, args: CreateFeaturesArgs): Promise<Features>;
}
