import { GraphQLResolveInfo } from "graphql";
import { FindManyRequestArgs } from "./args/FindManyRequestArgs";
import { Request } from "../../../models/Request";
export declare class FindManyRequestResolver {
    requests(ctx: any, info: GraphQLResolveInfo, args: FindManyRequestArgs): Promise<Request[]>;
}
