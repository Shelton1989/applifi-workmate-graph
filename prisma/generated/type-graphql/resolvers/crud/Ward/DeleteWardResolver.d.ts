import { GraphQLResolveInfo } from "graphql";
import { DeleteWardArgs } from "./args/DeleteWardArgs";
import { Ward } from "../../../models/Ward";
export declare class DeleteWardResolver {
    deleteWard(ctx: any, info: GraphQLResolveInfo, args: DeleteWardArgs): Promise<Ward | null>;
}
