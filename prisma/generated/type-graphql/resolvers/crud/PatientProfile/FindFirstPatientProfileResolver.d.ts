import { GraphQLResolveInfo } from "graphql";
import { FindFirstPatientProfileArgs } from "./args/FindFirstPatientProfileArgs";
import { PatientProfile } from "../../../models/PatientProfile";
export declare class FindFirstPatientProfileResolver {
    findFirstPatientProfile(ctx: any, info: GraphQLResolveInfo, args: FindFirstPatientProfileArgs): Promise<PatientProfile | null>;
}
