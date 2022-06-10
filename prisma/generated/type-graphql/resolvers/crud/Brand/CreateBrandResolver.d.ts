import { GraphQLResolveInfo } from "graphql";
import { CreateBrandArgs } from "./args/CreateBrandArgs";
import { Brand } from "../../../models/Brand";
export declare class CreateBrandResolver {
    createBrand(ctx: any, info: GraphQLResolveInfo, args: CreateBrandArgs): Promise<Brand>;
}
