import { MealCreateManyTenantInputEnvelope } from "../inputs/MealCreateManyTenantInputEnvelope";
import { MealCreateOrConnectWithoutTenantInput } from "../inputs/MealCreateOrConnectWithoutTenantInput";
import { MealCreateWithoutTenantInput } from "../inputs/MealCreateWithoutTenantInput";
import { MealScalarWhereInput } from "../inputs/MealScalarWhereInput";
import { MealUpdateManyWithWhereWithoutTenantInput } from "../inputs/MealUpdateManyWithWhereWithoutTenantInput";
import { MealUpdateWithWhereUniqueWithoutTenantInput } from "../inputs/MealUpdateWithWhereUniqueWithoutTenantInput";
import { MealUpsertWithWhereUniqueWithoutTenantInput } from "../inputs/MealUpsertWithWhereUniqueWithoutTenantInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealUpdateManyWithoutTenantInput {
    create?: MealCreateWithoutTenantInput[] | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutTenantInput[] | undefined;
    upsert?: MealUpsertWithWhereUniqueWithoutTenantInput[] | undefined;
    createMany?: MealCreateManyTenantInputEnvelope | undefined;
    set?: MealWhereUniqueInput[] | undefined;
    disconnect?: MealWhereUniqueInput[] | undefined;
    delete?: MealWhereUniqueInput[] | undefined;
    connect?: MealWhereUniqueInput[] | undefined;
    update?: MealUpdateWithWhereUniqueWithoutTenantInput[] | undefined;
    updateMany?: MealUpdateManyWithWhereWithoutTenantInput[] | undefined;
    deleteMany?: MealScalarWhereInput[] | undefined;
}
