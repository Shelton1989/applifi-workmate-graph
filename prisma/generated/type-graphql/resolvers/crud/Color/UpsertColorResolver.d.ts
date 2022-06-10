import { GraphQLResolveInfo } from "graphql";
import { UpsertColorArgs } from "./args/UpsertColorArgs";
import { Color } from "../../../models/Color";
export declare class UpsertColorResolver {
    upsertColor(ctx: any, info: GraphQLResolveInfo, args: UpsertColorArgs): Promise<Color>;
}
