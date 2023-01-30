import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFeaturesArgs } from "./args/FindUniqueFeaturesArgs";
import { Features } from "../../../models/Features";
export declare class FindUniqueFeaturesResolver {
    findUniqueFeatures(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFeaturesArgs): Promise<Features | null>;
}
