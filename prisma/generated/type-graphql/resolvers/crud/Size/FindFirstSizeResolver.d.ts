import { GraphQLResolveInfo } from "graphql";
import { FindFirstSizeArgs } from "./args/FindFirstSizeArgs";
import { Size } from "../../../models/Size";
export declare class FindFirstSizeResolver {
    findFirstSize(ctx: any, info: GraphQLResolveInfo, args: FindFirstSizeArgs): Promise<Size | null>;
}
