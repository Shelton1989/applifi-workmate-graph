import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBrandArgs } from "./args/FindUniqueBrandArgs";
import { Brand } from "../../../models/Brand";
export declare class FindUniqueBrandResolver {
    brand(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBrandArgs): Promise<Brand | null>;
}
