import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumORDER_STATUSFilter } from "../inputs/EnumORDER_STATUSFilter";
import { MealRelationFilter } from "../inputs/MealRelationFilter";
import { OrderLineItemListRelationFilter } from "../inputs/OrderLineItemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TenantRelationFilter } from "../inputs/TenantRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class OrderWhereInput {
    AND?: OrderWhereInput[] | undefined;
    OR?: OrderWhereInput[] | undefined;
    NOT?: OrderWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Meal?: MealRelationFilter | undefined;
    mealId?: StringFilter | undefined;
    status?: EnumORDER_STATUSFilter | undefined;
    Patient?: UserRelationFilter | undefined;
    patientId?: StringFilter | undefined;
    Tenant?: TenantRelationFilter | undefined;
    tenantId?: StringFilter | undefined;
    Items?: OrderLineItemListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
