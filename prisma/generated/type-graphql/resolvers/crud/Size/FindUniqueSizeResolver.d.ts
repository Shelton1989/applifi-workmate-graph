import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSizeArgs } from "./args/FindUniqueSizeArgs";
import { Size } from "../../../models/Size";
export declare class FindUniqueSizeResolver {
    size(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSizeArgs): Promise<Size | null>;
}
