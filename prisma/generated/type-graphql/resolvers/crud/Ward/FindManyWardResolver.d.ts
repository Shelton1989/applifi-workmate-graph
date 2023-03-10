import { GraphQLResolveInfo } from "graphql";
import { FindManyWardArgs } from "./args/FindManyWardArgs";
import { Ward } from "../../../models/Ward";
export declare class FindManyWardResolver {
    wards(ctx: any, info: GraphQLResolveInfo, args: FindManyWardArgs): Promise<Ward[]>;
}
