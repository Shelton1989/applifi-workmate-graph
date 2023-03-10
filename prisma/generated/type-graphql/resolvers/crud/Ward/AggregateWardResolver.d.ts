import { GraphQLResolveInfo } from "graphql";
import { AggregateWardArgs } from "./args/AggregateWardArgs";
import { AggregateWard } from "../../outputs/AggregateWard";
export declare class AggregateWardResolver {
    aggregateWard(ctx: any, info: GraphQLResolveInfo, args: AggregateWardArgs): Promise<AggregateWard>;
}
