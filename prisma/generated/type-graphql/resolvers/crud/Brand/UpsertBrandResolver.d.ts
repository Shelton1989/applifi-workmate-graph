import { GraphQLResolveInfo } from "graphql";
import { UpsertBrandArgs } from "./args/UpsertBrandArgs";
import { Brand } from "../../../models/Brand";
export declare class UpsertBrandResolver {
    upsertBrand(ctx: any, info: GraphQLResolveInfo, args: UpsertBrandArgs): Promise<Brand>;
}
