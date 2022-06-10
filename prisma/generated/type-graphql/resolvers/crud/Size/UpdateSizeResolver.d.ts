import { GraphQLResolveInfo } from "graphql";
import { UpdateSizeArgs } from "./args/UpdateSizeArgs";
import { Size } from "../../../models/Size";
export declare class UpdateSizeResolver {
    updateSize(ctx: any, info: GraphQLResolveInfo, args: UpdateSizeArgs): Promise<Size | null>;
}
