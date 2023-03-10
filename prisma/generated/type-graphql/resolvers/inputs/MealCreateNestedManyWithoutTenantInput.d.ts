import { MealCreateManyTenantInputEnvelope } from "../inputs/MealCreateManyTenantInputEnvelope";
import { MealCreateOrConnectWithoutTenantInput } from "../inputs/MealCreateOrConnectWithoutTenantInput";
import { MealCreateWithoutTenantInput } from "../inputs/MealCreateWithoutTenantInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealCreateNestedManyWithoutTenantInput {
    create?: MealCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutTenantInput[] | undefined;
    createMany?: MealCreateManyTenantInputEnvelope | undefined;
    connect?: MealWhereUniqueInput[] | undefined;
}
