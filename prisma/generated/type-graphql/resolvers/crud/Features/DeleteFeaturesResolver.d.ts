import { GraphQLResolveInfo } from "graphql";
import { DeleteFeaturesArgs } from "./args/DeleteFeaturesArgs";
import { Features } from "../../../models/Features";
export declare class DeleteFeaturesResolver {
    deleteFeatures(ctx: any, info: GraphQLResolveInfo, args: DeleteFeaturesArgs): Promise<Features | null>;
}
