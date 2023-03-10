import { PatientProfile } from "../../../models/PatientProfile";
import { User } from "../../../models/User";
export declare class PatientProfileRelationsResolver {
    User(patientProfile: PatientProfile, ctx: any): Promise<User | null>;
}
