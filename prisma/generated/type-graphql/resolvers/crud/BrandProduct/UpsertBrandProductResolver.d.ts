import { GraphQLResolveInfo } from "graphql";
import { UpsertBrandProductArgs } from "./args/UpsertBrandProductArgs";
import { BrandProduct } from "../../../models/BrandProduct";
export declare class UpsertBrandProductResolver {
    upsertBrandProduct(ctx: any, info: GraphQLResolveInfo, args: UpsertBrandProductArgs): Promise<BrandProduct>;
}
