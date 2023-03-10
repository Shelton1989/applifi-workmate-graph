import { GraphQLResolveInfo } from "graphql";
import { AggregatePatientProfileArgs } from "./args/AggregatePatientProfileArgs";
import { AggregatePatientProfile } from "../../outputs/AggregatePatientProfile";
export declare class AggregatePatientProfileResolver {
    aggregatePatientProfile(ctx: any, info: GraphQLResolveInfo, args: AggregatePatientProfileArgs): Promise<AggregatePatientProfile>;
}
