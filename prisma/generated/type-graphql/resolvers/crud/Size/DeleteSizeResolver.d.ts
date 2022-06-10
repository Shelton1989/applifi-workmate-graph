import { GraphQLResolveInfo } from "graphql";
import { DeleteSizeArgs } from "./args/DeleteSizeArgs";
import { Size } from "../../../models/Size";
export declare class DeleteSizeResolver {
    deleteSize(ctx: any, info: GraphQLResolveInfo, args: DeleteSizeArgs): Promise<Size | null>;
}
