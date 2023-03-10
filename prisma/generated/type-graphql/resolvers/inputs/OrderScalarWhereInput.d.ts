import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumORDER_STATUSFilter } from "../inputs/EnumORDER_STATUSFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class OrderScalarWhereInput {
    AND?: OrderScalarWhereInput[] | undefined;
    OR?: OrderScalarWhereInput[] | undefined;
    NOT?: OrderScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    mealId?: StringFilter | undefined;
    status?: EnumORDER_STATUSFilter | undefined;
    patientId?: StringFilter | undefined;
    tenantId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
