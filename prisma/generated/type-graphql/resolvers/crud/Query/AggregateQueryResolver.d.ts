import { GraphQLResolveInfo } from "graphql";
import { AggregateQueryArgs } from "./args/AggregateQueryArgs";
import { AggregateQuery } from "../../outputs/AggregateQuery";
export declare class AggregateQueryResolver {
    aggregateQuery(ctx: any, info: GraphQLResolveInfo, args: AggregateQueryArgs): Promise<AggregateQuery>;
}
