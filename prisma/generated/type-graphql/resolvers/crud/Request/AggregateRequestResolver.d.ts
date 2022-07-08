import { GraphQLResolveInfo } from "graphql";
import { AggregateRequestArgs } from "./args/AggregateRequestArgs";
import { AggregateRequest } from "../../outputs/AggregateRequest";
export declare class AggregateRequestResolver {
    aggregateRequest(ctx: any, info: GraphQLResolveInfo, args: AggregateRequestArgs): Promise<AggregateRequest>;
}
