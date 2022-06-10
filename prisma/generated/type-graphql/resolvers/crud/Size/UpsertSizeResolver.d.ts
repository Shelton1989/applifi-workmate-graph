import { GraphQLResolveInfo } from "graphql";
import { UpsertSizeArgs } from "./args/UpsertSizeArgs";
import { Size } from "../../../models/Size";
export declare class UpsertSizeResolver {
    upsertSize(ctx: any, info: GraphQLResolveInfo, args: UpsertSizeArgs): Promise<Size>;
}
