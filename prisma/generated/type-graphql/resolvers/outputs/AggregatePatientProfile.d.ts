import { PatientProfileCountAggregate } from "../outputs/PatientProfileCountAggregate";
import { PatientProfileMaxAggregate } from "../outputs/PatientProfileMaxAggregate";
import { PatientProfileMinAggregate } from "../outputs/PatientProfileMinAggregate";
export declare class AggregatePatientProfile {
    _count: PatientProfileCountAggregate | null;
    _min: PatientProfileMinAggregate | null;
    _max: PatientProfileMaxAggregate | null;
}
