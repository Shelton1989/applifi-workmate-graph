import { GraphQLResolveInfo } from "graphql";
import { FindFirstColorArgs } from "./args/FindFirstColorArgs";
import { Color } from "../../../models/Color";
export declare class FindFirstColorResolver {
    findFirstColor(ctx: any, info: GraphQLResolveInfo, args: FindFirstColorArgs): Promise<Color | null>;
}
