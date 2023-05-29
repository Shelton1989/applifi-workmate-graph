import { GraphQLResolveInfo } from "graphql";
import { CreateQueryArgs } from "./args/CreateQueryArgs";
import { Query } from "../../../models/Query";
export declare class CreateQueryResolver {
    createQuery(ctx: any, info: GraphQLResolveInfo, args: CreateQueryArgs): Promise<Query>;
}
