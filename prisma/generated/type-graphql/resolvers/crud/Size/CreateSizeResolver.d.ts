import { GraphQLResolveInfo } from "graphql";
import { CreateSizeArgs } from "./args/CreateSizeArgs";
import { Size } from "../../../models/Size";
export declare class CreateSizeResolver {
    createSize(ctx: any, info: GraphQLResolveInfo, args: CreateSizeArgs): Promise<Size>;
}
