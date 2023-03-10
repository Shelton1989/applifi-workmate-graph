import { MealCreateOrConnectWithoutItemsInput } from "../inputs/MealCreateOrConnectWithoutItemsInput";
import { MealCreateWithoutItemsInput } from "../inputs/MealCreateWithoutItemsInput";
import { MealScalarWhereInput } from "../inputs/MealScalarWhereInput";
import { MealUpdateManyWithWhereWithoutItemsInput } from "../inputs/MealUpdateManyWithWhereWithoutItemsInput";
import { MealUpdateWithWhereUniqueWithoutItemsInput } from "../inputs/MealUpdateWithWhereUniqueWithoutItemsInput";
import { MealUpsertWithWhereUniqueWithoutItemsInput } from "../inputs/MealUpsertWithWhereUniqueWithoutItemsInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealUpdateManyWithoutItemsInput {
    create?: MealCreateWithoutItemsInput[] | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutItemsInput[] | undefined;
    upsert?: MealUpsertWithWhereUniqueWithoutItemsInput[] | undefined;
    set?: MealWhereUniqueInput[] | undefined;
    disconnect?: MealWhereUniqueInput[] | undefined;
    delete?: MealWhereUniqueInput[] | undefined;
    connect?: MealWhereUniqueInput[] | undefined;
    update?: MealUpdateWithWhereUniqueWithoutItemsInput[] | undefined;
    updateMany?: MealUpdateManyWithWhereWithoutItemsInput[] | undefined;
    deleteMany?: MealScalarWhereInput[] | undefined;
}
