import { GraphQLResolveInfo } from "graphql";
import { FindUniqueColorArgs } from "./args/FindUniqueColorArgs";
import { Color } from "../../../models/Color";
export declare class FindUniqueColorResolver {
    color(ctx: any, info: GraphQLResolveInfo, args: FindUniqueColorArgs): Promise<Color | null>;
}
