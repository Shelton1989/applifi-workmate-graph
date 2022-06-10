import { GraphQLResolveInfo } from "graphql";
import { FindFirstBrandProductArgs } from "./args/FindFirstBrandProductArgs";
import { BrandProduct } from "../../../models/BrandProduct";
export declare class FindFirstBrandProductResolver {
    findFirstBrandProduct(ctx: any, info: GraphQLResolveInfo, args: FindFirstBrandProductArgs): Promise<BrandProduct | null>;
}
