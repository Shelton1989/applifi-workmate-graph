import { GraphQLResolveInfo } from "graphql";
import { FindUniqueQueryArgs } from "./args/FindUniqueQueryArgs";
import { Query } from "../../../models/Query";
export declare class FindUniqueQueryResolver {
    query(ctx: any, info: GraphQLResolveInfo, args: FindUniqueQueryArgs): Promise<Query | null>;
}
