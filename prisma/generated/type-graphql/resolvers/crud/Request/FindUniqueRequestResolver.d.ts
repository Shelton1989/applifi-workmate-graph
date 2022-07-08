import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRequestArgs } from "./args/FindUniqueRequestArgs";
import { Request } from "../../../models/Request";
export declare class FindUniqueRequestResolver {
    request(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRequestArgs): Promise<Request | null>;
}
