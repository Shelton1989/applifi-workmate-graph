import { FeaturesCreateManyMealInputEnvelope } from "../inputs/FeaturesCreateManyMealInputEnvelope";
import { FeaturesCreateOrConnectWithoutMealInput } from "../inputs/FeaturesCreateOrConnectWithoutMealInput";
import { FeaturesCreateWithoutMealInput } from "../inputs/FeaturesCreateWithoutMealInput";
import { FeaturesWhereUniqueInput } from "../inputs/FeaturesWhereUniqueInput";
export declare class FeaturesCreateNestedManyWithoutMealInput {
    create?: FeaturesCreateWithoutMealInput[] | undefined;
    connectOrCreate?: FeaturesCreateOrConnectWithoutMealInput[] | undefined;
    createMany?: FeaturesCreateManyMealInputEnvelope | undefined;
    connect?: FeaturesWhereUniqueInput[] | undefined;
}
