import { GraphQLResolveInfo } from "graphql";
import { CreateColorArgs } from "./args/CreateColorArgs";
import { Color } from "../../../models/Color";
export declare class CreateColorResolver {
    createColor(ctx: any, info: GraphQLResolveInfo, args: CreateColorArgs): Promise<Color>;
}
