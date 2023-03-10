import { MealCreateOrConnectWithoutPostsInput } from "../inputs/MealCreateOrConnectWithoutPostsInput";
import { MealCreateWithoutPostsInput } from "../inputs/MealCreateWithoutPostsInput";
import { MealUpdateWithoutPostsInput } from "../inputs/MealUpdateWithoutPostsInput";
import { MealUpsertWithoutPostsInput } from "../inputs/MealUpsertWithoutPostsInput";
import { MealWhereUniqueInput } from "../inputs/MealWhereUniqueInput";
export declare class MealUpdateOneWithoutPostsInput {
    create?: MealCreateWithoutPostsInput | undefined;
    connectOrCreate?: MealCreateOrConnectWithoutPostsInput | undefined;
    upsert?: MealUpsertWithoutPostsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: MealWhereUniqueInput | undefined;
    update?: MealUpdateWithoutPostsInput | undefined;
}
