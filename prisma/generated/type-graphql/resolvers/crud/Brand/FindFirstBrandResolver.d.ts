import { GraphQLResolveInfo } from "graphql";
import { FindFirstBrandArgs } from "./args/FindFirstBrandArgs";
import { Brand } from "../../../models/Brand";
export declare class FindFirstBrandResolver {
    findFirstBrand(ctx: any, info: GraphQLResolveInfo, args: FindFirstBrandArgs): Promise<Brand | null>;
}
