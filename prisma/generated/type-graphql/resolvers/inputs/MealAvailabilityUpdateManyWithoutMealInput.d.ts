import { MealAvailabilityCreateManyMealInputEnvelope } from "../inputs/MealAvailabilityCreateManyMealInputEnvelope";
import { MealAvailabilityCreateOrConnectWithoutMealInput } from "../inputs/MealAvailabilityCreateOrConnectWithoutMealInput";
import { MealAvailabilityCreateWithoutMealInput } from "../inputs/MealAvailabilityCreateWithoutMealInput";
import { MealAvailabilityScalarWhereInput } from "../inputs/MealAvailabilityScalarWhereInput";
import { MealAvailabilityUpdateManyWithWhereWithoutMealInput } from "../inputs/MealAvailabilityUpdateManyWithWhereWithoutMealInput";
import { MealAvailabilityUpdateWithWhereUniqueWithoutMealInput } from "../inputs/MealAvailabilityUpdateWithWhereUniqueWithoutMealInput";
import { MealAvailabilityUpsertWithWhereUniqueWithoutMealInput } from "../inputs/MealAvailabilityUpsertWithWhereUniqueWithoutMealInput";
import { MealAvailabilityWhereUniqueInput } from "../inputs/MealAvailabilityWhereUniqueInput";
export declare class MealAvailabilityUpdateManyWithoutMealInput {
    create?: MealAvailabilityCreateWithoutMealInput[] | undefined;
    connectOrCreate?: MealAvailabilityCreateOrConnectWithoutMealInput[] | undefined;
    upsert?: MealAvailabilityUpsertWithWhereUniqueWithoutMealInput[] | undefined;
    createMany?: MealAvailabilityCreateManyMealInputEnvelope | undefined;
    set?: MealAvailabilityWhereUniqueInput[] | undefined;
    disconnect?: MealAvailabilityWhereUniqueInput[] | undefined;
    delete?: MealAvailabilityWhereUniqueInput[] | undefined;
    connect?: MealAvailabilityWhereUniqueInput[] | undefined;
    update?: MealAvailabilityUpdateWithWhereUniqueWithoutMealInput[] | undefined;
    updateMany?: MealAvailabilityUpdateManyWithWhereWithoutMealInput[] | undefined;
    deleteMany?: MealAvailabilityScalarWhereInput[] | undefined;
}
