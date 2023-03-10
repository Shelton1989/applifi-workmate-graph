import { GraphQLResolveInfo } from "graphql";
import { CreateWardArgs } from "./args/CreateWardArgs";
import { Ward } from "../../../models/Ward";
export declare class CreateWardResolver {
    createWard(ctx: any, info: GraphQLResolveInfo, args: CreateWardArgs): Promise<Ward>;
}
