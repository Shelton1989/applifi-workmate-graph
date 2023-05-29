import { GraphQLResolveInfo } from "graphql";
import { FindFirstQueryArgs } from "./args/FindFirstQueryArgs";
import { Query } from "../../../models/Query";
export declare class FindFirstQueryResolver {
    findFirstQuery(ctx: any, info: GraphQLResolveInfo, args: FindFirstQueryArgs): Promise<Query | null>;
}
