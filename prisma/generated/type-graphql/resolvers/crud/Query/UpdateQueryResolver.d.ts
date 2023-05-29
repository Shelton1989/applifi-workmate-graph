import { GraphQLResolveInfo } from "graphql";
import { UpdateQueryArgs } from "./args/UpdateQueryArgs";
import { Query } from "../../../models/Query";
export declare class UpdateQueryResolver {
    updateQuery(ctx: any, info: GraphQLResolveInfo, args: UpdateQueryArgs): Promise<Query | null>;
}
