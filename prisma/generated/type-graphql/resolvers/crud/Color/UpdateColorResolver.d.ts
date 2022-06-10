import { GraphQLResolveInfo } from "graphql";
import { UpdateColorArgs } from "./args/UpdateColorArgs";
import { Color } from "../../../models/Color";
export declare class UpdateColorResolver {
    updateColor(ctx: any, info: GraphQLResolveInfo, args: UpdateColorArgs): Promise<Color | null>;
}
