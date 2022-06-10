import { GraphQLResolveInfo } from "graphql";
import { FindManyBrandProductArgs } from "./args/FindManyBrandProductArgs";
import { BrandProduct } from "../../../models/BrandProduct";
export declare class FindManyBrandProductResolver {
    brandProducts(ctx: any, info: GraphQLResolveInfo, args: FindManyBrandProductArgs): Promise<BrandProduct[]>;
}
