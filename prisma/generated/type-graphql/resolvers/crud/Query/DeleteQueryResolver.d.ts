import { GraphQLResolveInfo } from "graphql";
import { DeleteQueryArgs } from "./args/DeleteQueryArgs";
import { Query } from "../../../models/Query";
export declare class DeleteQueryResolver {
    deleteQuery(ctx: any, info: GraphQLResolveInfo, args: DeleteQueryArgs): Promise<Query | null>;
}
