import { GraphQLResolveInfo } from "graphql";
import { UpsertPatientProfileArgs } from "./args/UpsertPatientProfileArgs";
import { PatientProfile } from "../../../models/PatientProfile";
export declare class UpsertPatientProfileResolver {
    upsertPatientProfile(ctx: any, info: GraphQLResolveInfo, args: UpsertPatientProfileArgs): Promise<PatientProfile>;
}
