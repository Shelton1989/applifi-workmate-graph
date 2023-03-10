import { PatientProfileCreateInput } from "../../../inputs/PatientProfileCreateInput";
import { PatientProfileUpdateInput } from "../../../inputs/PatientProfileUpdateInput";
import { PatientProfileWhereUniqueInput } from "../../../inputs/PatientProfileWhereUniqueInput";
export declare class UpsertPatientProfileArgs {
    where: PatientProfileWhereUniqueInput;
    create: PatientProfileCreateInput;
    update: PatientProfileUpdateInput;
}
