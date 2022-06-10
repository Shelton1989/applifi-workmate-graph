import { GraphQLResolveInfo } from "graphql";
import { DeleteColorArgs } from "./args/DeleteColorArgs";
import { Color } from "../../../models/Color";
export declare class DeleteColorResolver {
    deleteColor(ctx: any, info: GraphQLResolveInfo, args: DeleteColorArgs): Promise<Color | null>;
}
