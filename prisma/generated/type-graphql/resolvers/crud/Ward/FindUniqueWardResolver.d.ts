import { GraphQLResolveInfo } from "graphql";
import { FindUniqueWardArgs } from "./args/FindUniqueWardArgs";
import { Ward } from "../../../models/Ward";
export declare class FindUniqueWardResolver {
    ward(ctx: any, info: GraphQLResolveInfo, args: FindUniqueWardArgs): Promise<Ward | null>;
}
