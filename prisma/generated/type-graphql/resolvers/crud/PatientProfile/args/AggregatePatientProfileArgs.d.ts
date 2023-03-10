import { PatientProfileOrderByWithRelationInput } from "../../../inputs/PatientProfileOrderByWithRelationInput";
import { PatientProfileWhereInput } from "../../../inputs/PatientProfileWhereInput";
import { PatientProfileWhereUniqueInput } from "../../../inputs/PatientProfileWhereUniqueInput";
export declare class AggregatePatientProfileArgs {
    where?: PatientProfileWhereInput | undefined;
    orderBy?: PatientProfileOrderByWithRelationInput[] | undefined;
    cursor?: PatientProfileWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
