import { MealCreateOrConnectWithoutLikedByInput } from "../inputs/MealCreateOrConnectWithoutLikedByInput";
import { MealCreateWithoutLikedByInput } from "../inputs/MealCreateWithoutLikedByInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealCreateNestedManyWithoutLikedByInput {
    create?: MealCreateWithoutLikedByInput[] | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutLikedByInput[] | undefined;
    connect?: MealWhereUniqueInput[] | undefined;
}
