import { GraphQLResolveInfo } from "graphql";
import { UpdatePatientProfileArgs } from "./args/UpdatePatientProfileArgs";
import { PatientProfile } from "../../../models/PatientProfile";
export declare class UpdatePatientProfileResolver {
    updatePatientProfile(ctx: any, info: GraphQLResolveInfo, args: UpdatePatientProfileArgs): Promise<PatientProfile | null>;
}
