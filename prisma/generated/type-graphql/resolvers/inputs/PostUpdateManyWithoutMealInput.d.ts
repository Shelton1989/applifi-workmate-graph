import { PostCreateManyMealInputEnvelope } from "../inputs/PostCreateManyMealInputEnvelope";
import { PostCreateOrConnectWithoutMealInput } from "../inputs/PostCreateOrConnectWithoutMealInput";
import { PostCreateWithoutMealInput } from "../inputs/PostCreateWithoutMealInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutMealInput } from "../inputs/PostUpdateManyWithWhereWithoutMealInput";
import { PostUpdateWithWhereUniqueWithoutMealInput } from "../inputs/PostUpdateWithWhereUniqueWithoutMealInput";
import { PostUpsertWithWhereUniqueWithoutMealInput } from "../inputs/PostUpsertWithWhereUniqueWithoutMealInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";
export declare class PostUpdateManyWithoutMealInput {
    create?: PostCreateWithoutMealInput[] | undefined;
    connectOrCreate?: PostCreateOrConnectWithoutMealInput[] | undefined;
    upsert?: PostUpsertWithWhereUniqueWithoutMealInput[] | undefined;
    createMany?: PostCreateManyMealInputEnvelope | undefined;
    set?: PostWhereUniqueInput[] | undefined;
    disconnect?: PostWhereUniqueInput[] | undefined;
    delete?: PostWhereUniqueInput[] | undefined;
    connect?: PostWhereUniqueInput[] | undefined;
    update?: PostUpdateWithWhereUniqueWithoutMealInput[] | undefined;
    updateMany?: PostUpdateManyWithWhereWithoutMealInput[] | undefined;
    deleteMany?: PostScalarWhereInput[] | undefined;
}
