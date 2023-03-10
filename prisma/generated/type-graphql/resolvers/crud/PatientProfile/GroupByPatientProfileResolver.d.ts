import { GraphQLResolveInfo } from "graphql";
import { GroupByPatientProfileArgs } from "./args/GroupByPatientProfileArgs";
import { PatientProfileGroupBy } from "../../outputs/PatientProfileGroupBy";
export declare class GroupByPatientProfileResolver {
    groupByPatientProfile(ctx: any, info: GraphQLResolveInfo, args: GroupByPatientProfileArgs): Promise<PatientProfileGroupBy[]>;
}
