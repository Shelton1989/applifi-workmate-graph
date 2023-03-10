import { GraphQLResolveInfo } from "graphql";
import { CreatePatientProfileArgs } from "./args/CreatePatientProfileArgs";
import { PatientProfile } from "../../../models/PatientProfile";
export declare class CreatePatientProfileResolver {
    createPatientProfile(ctx: any, info: GraphQLResolveInfo, args: CreatePatientProfileArgs): Promise<PatientProfile>;
}
