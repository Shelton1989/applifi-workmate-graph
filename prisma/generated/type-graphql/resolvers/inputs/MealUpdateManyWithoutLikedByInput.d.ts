import { MealCreateOrConnectWithoutLikedByInput } from "../inputs/MealCreateOrConnectWithoutLikedByInput";
import { MealCreateWithoutLikedByInput } from "../inputs/MealCreateWithoutLikedByInput";
import { MealScalarWhereInput } from "../inputs/MealScalarWhereInput";
import { MealUpdateManyWithWhereWithoutLikedByInput } from "../inputs/MealUpdateManyWithWhereWithoutLikedByInput";
import { MealUpdateWithWhereUniqueWithoutLikedByInput } from "../inputs/MealUpdateWithWhereUniqueWithoutLikedByInput";
import { MealUpsertWithWhereUniqueWithoutLikedByInput } from "../inputs/MealUpsertWithWhereUniqueWithoutLikedByInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealUpdateManyWithoutLikedByInput {
    create?: MealCreateWithoutLikedByInput[] | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutLikedByInput[] | undefined;
    upsert?: MealUpsertWithWhereUniqueWithoutLikedByInput[] | undefined;
    set?: MealWhereUniqueInput[] | undefined;
    disconnect?: MealWhereUniqueInput[] | undefined;
    delete?: MealWhereUniqueInput[] | undefined;
    connect?: MealWhereUniqueInput[] | undefined;
    update?: MealUpdateWithWhereUniqueWithoutLikedByInput[] | undefined;
    updateMany?: MealUpdateManyWithWhereWithoutLikedByInput[] | undefined;
    deleteMany?: MealScalarWhereInput[] | undefined;
}
