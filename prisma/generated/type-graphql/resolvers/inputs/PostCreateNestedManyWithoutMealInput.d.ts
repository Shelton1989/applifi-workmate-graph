import { PostCreateManyMealInputEnvelope } from "../inputs/PostCreateManyMealInputEnvelope";
import { PostCreateOrConnectWithoutMealInput } from "../inputs/PostCreateOrConnectWithoutMealInput";
import { PostCreateWithoutMealInput } from "../inputs/PostCreateWithoutMealInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostCreateNestedManyWithoutMealInput {
    create?: PostCreateWithoutMealInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutMealInput[] | undefined;
    createMany?: PostCreateManyMealInputEnvelope | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
}
