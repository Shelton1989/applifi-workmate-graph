import { GraphQLResolveInfo } from "graphql";
import { FindManyColorArgs } from "./args/FindManyColorArgs";
import { Color } from "../../../models/Color";
export declare class FindManyColorResolver {
    colors(ctx: any, info: GraphQLResolveInfo, args: FindManyColorArgs): Promise<Color[]>;
}
