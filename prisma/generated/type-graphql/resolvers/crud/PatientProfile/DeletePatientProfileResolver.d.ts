import { GraphQLResolveInfo } from "graphql";
import { DeletePatientProfileArgs } from "./args/DeletePatientProfileArgs";
import { PatientProfile } from "../../../models/PatientProfile";
export declare class DeletePatientProfileResolver {
    deletePatientProfile(ctx: any, info: GraphQLResolveInfo, args: DeletePatientProfileArgs): Promise<PatientProfile | null>;
}
