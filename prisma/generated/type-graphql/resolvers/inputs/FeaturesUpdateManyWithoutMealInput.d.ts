import { FeaturesCreateManyMealInputEnvelope } from "../inputs/FeaturesCreateManyMealInputEnvelope";
import { FeaturesCreateOrConnectWithoutMealInput } from "../inputs/FeaturesCreateOrConnectWithoutMealInput";
import { FeaturesCreateWithoutMealInput } from "../inputs/FeaturesCreateWithoutMealInput";
import { FeaturesScalarWhereInput } from "../inputs/FeaturesScalarWhereInput";
import { FeaturesUpdateManyWithWhereWithoutMealInput } from "../inputs/FeaturesUpdateManyWithWhereWithoutMealInput";
import { FeaturesUpdateWithWhereUniqueWithoutMealInput } from "../inputs/FeaturesUpdateWithWhereUniqueWithoutMealInput";
import { FeaturesUpsertWithWhereUniqueWithoutMealInput } from "../inputs/FeaturesUpsertWithWhereUniqueWithoutMealInput";
import { FeaturesWhereUniqueInput } from "../inputs/FeaturesWhereUniqueInput";
export declare class FeaturesUpdateManyWithoutMealInput {
    create?: FeaturesCreateWithoutMealInput[] | undefined;
    connectOrCreate?: FeaturesCreateOrConnectWithoutMealInput[] | undefined;
    upsert?: FeaturesUpsertWithWhereUniqueWithoutMealInput[] | undefined;
    createMany?: FeaturesCreateManyMealInputEnvelope | undefined;
    set?: FeaturesWhereUniqueInput[] | undefined;
    disconnect?: FeaturesWhereUniqueInput[] | undefined;
    delete?: FeaturesWhereUniqueInput[] | undefined;
    connect?: FeaturesWhereUniqueInput[] | undefined;
    update?: FeaturesUpdateWithWhereUniqueWithoutMealInput[] | undefined;
    updateMany?: FeaturesUpdateManyWithWhereWithoutMealInput[] | undefined;
    deleteMany?: FeaturesScalarWhereInput[] | undefined;
}
