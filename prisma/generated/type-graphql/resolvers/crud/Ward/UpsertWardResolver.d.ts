import { GraphQLResolveInfo } from "graphql";
import { UpsertWardArgs } from "./args/UpsertWardArgs";
import { Ward } from "../../../models/Ward";
export declare class UpsertWardResolver {
    upsertWard(ctx: any, info: GraphQLResolveInfo, args: UpsertWardArgs): Promise<Ward>;
}
