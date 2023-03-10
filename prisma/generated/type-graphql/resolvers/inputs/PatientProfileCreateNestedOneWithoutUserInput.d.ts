import { PatientProfileCreateOrConnectWithoutUserInput } from "../inputs/PatientProfileCreateOrConnectWithoutUserInput";
import { PatientProfileCreateWithoutUserInput } from "../inputs/PatientProfileCreateWithoutUserInput";
import { PatientProfileWhereUniqueInput } from "../inputs/PatientProfileWhereUniqueInput";
export declare class PatientProfileCreateNestedOneWithoutUserInput {
    create?: PatientProfileCreateWithoutUserInput | undefined;
    connectOrCreate?: PatientProfileCreateOrConnectWithoutUserInput | undefined;
    connect?: PatientProfileWhereUniqueInput | undefined;
}
