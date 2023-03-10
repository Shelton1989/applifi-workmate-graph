import { GraphQLResolveInfo } from "graphql";
import { FindUniquePatientProfileArgs } from "./args/FindUniquePatientProfileArgs";
import { PatientProfile } from "../../../models/PatientProfile";
export declare class FindUniquePatientProfileResolver {
    patientProfile(ctx: any, info: GraphQLResolveInfo, args: FindUniquePatientProfileArgs): Promise<PatientProfile | null>;
}
