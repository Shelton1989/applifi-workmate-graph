import { GraphQLResolveInfo } from "graphql";
import { FindManyBrandArgs } from "./args/FindManyBrandArgs";
import { Brand } from "../../../models/Brand";
export declare class FindManyBrandResolver {
    brands(ctx: any, info: GraphQLResolveInfo, args: FindManyBrandArgs): Promise<Brand[]>;
}
