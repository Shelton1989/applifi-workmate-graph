import { GraphQLResolveInfo } from "graphql";
import { UpdateWardArgs } from "./args/UpdateWardArgs";
import { Ward } from "../../../models/Ward";
export declare class UpdateWardResolver {
    updateWard(ctx: any, info: GraphQLResolveInfo, args: UpdateWardArgs): Promise<Ward | null>;
}
