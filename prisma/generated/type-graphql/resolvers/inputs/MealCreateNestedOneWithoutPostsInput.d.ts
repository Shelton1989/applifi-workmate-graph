import { MealCreateOrConnectWithoutPostsInput } from "../inputs/MealCreateOrConnectWithoutPostsInput";
import { MealCreateWithoutPostsInput } from "../inputs/MealCreateWithoutPostsInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealCreateNestedOneWithoutPostsInput {
    create?: MealCreateWithoutPostsInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutPostsInput | undefined;
    connect?: MealWhereUniqueInput | undefined;
}
