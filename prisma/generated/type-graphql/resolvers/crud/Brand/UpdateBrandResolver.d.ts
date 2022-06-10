import { GraphQLResolveInfo } from "graphql";
import { UpdateBrandArgs } from "./args/UpdateBrandArgs";
import { Brand } from "../../../models/Brand";
export declare class UpdateBrandResolver {
    updateBrand(ctx: any, info: GraphQLResolveInfo, args: UpdateBrandArgs): Promise<Brand | null>;
}
