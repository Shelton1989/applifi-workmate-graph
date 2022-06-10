import { GraphQLResolveInfo } from "graphql";
import { FindManySizeArgs } from "./args/FindManySizeArgs";
import { Size } from "../../../models/Size";
export declare class FindManySizeResolver {
    sizes(ctx: any, info: GraphQLResolveInfo, args: FindManySizeArgs): Promise<Size[]>;
}
