import { GraphQLResolveInfo } from "graphql";
import { FindManyQueryArgs } from "./args/FindManyQueryArgs";
import { Query } from "../../../models/Query";
export declare class FindManyQueryResolver {
    queries(ctx: any, info: GraphQLResolveInfo, args: FindManyQueryArgs): Promise<Query[]>;
}
