import { PatientProfileCreateOrConnectWithoutUserInput } from "../inputs/PatientProfileCreateOrConnectWithoutUserInput";
import { PatientProfileCreateWithoutUserInput } from "../inputs/PatientProfileCreateWithoutUserInput";
import { PatientProfileUpdateWithoutUserInput } from "../inputs/PatientProfileUpdateWithoutUserInput";
import { PatientProfileUpsertWithoutUserInput } from "../inputs/PatientProfileUpsertWithoutUserInput";
import { PatientProfileWhereUniqueInput } from "../inputs/PatientProfileWhereUniqueInput";
export declare class PatientProfileUpdateOneWithoutUserInput {
    create?: PatientProfileCreateWithoutUserInput | undefined;
    connectOrCreate?: PatientProfileCreateOrConnectWithoutUserInput | undefined;
    upsert?: PatientProfileUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PatientProfileWhereUniqueInput | undefined;
    update?: PatientProfileUpdateWithoutUserInput | undefined;
}
