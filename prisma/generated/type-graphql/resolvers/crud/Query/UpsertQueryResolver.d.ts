import { GraphQLResolveInfo } from "graphql";
import { UpsertQueryArgs } from "./args/UpsertQueryArgs";
import { Query } from "../../../models/Query";
export declare class UpsertQueryResolver {
    upsertQuery(ctx: any, info: GraphQLResolveInfo, args: UpsertQueryArgs): Promise<Query>;
}
