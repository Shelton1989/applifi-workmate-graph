import { GraphQLResolveInfo } from "graphql";
import { FindManyPatientProfileArgs } from "./args/FindManyPatientProfileArgs";
import { PatientProfile } from "../../../models/PatientProfile";
export declare class FindManyPatientProfileResolver {
    patientProfiles(ctx: any, info: GraphQLResolveInfo, args: FindManyPatientProfileArgs): Promise<PatientProfile[]>;
}
