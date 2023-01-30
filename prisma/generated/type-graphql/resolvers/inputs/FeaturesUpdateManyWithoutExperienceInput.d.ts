import { FeaturesCreateManyExperienceInputEnvelope } from "../inputs/FeaturesCreateManyExperienceInputEnvelope";
import { FeaturesCreateOrConnectWithoutExperienceInput } from "../inputs/FeaturesCreateOrConnectWithoutExperienceInput";
import { FeaturesCreateWithoutExperienceInput } from "../inputs/FeaturesCreateWithoutExperienceInput";
import { FeaturesScalarWhereInput } from "../inputs/FeaturesScalarWhereInput";
import { FeaturesUpdateManyWithWhereWithoutExperienceInput } from "../inputs/FeaturesUpdateManyWithWhereWithoutExperienceInput";
import { FeaturesUpdateWithWhereUniqueWithoutExperienceInput } from "../inputs/FeaturesUpdateWithWhereUniqueWithoutExperienceInput";
import { FeaturesUpsertWithWhereUniqueWithoutExperienceInput } from "../inputs/FeaturesUpsertWithWhereUniqueWithoutExperienceInput";
import { FeaturesWhereUniqueInput } from "../inputs/FeaturesWhereUniqueInput";
export declare class FeaturesUpdateManyWithoutExperienceInput {
    create?: FeaturesCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: FeaturesCreateOrConnectWithoutExperienceInput[] | undefined;
    upsert?: FeaturesUpsertWithWhereUniqueWithoutExperienceInput[] | undefined;
    createMany?: FeaturesCreateManyExperienceInputEnvelope | undefined;
    set?: FeaturesWhereUniqueInput[] | undefined;
    disconnect?: FeaturesWhereUniqueInput[] | undefined;
    delete?: FeaturesWhereUniqueInput[] | undefined;
    connect?: FeaturesWhereUniqueInput[] | undefined;
    update?: FeaturesUpdateWithWhereUniqueWithoutExperienceInput[] | undefined;
    updateMany?: FeaturesUpdateManyWithWhereWithoutExperienceInput[] | undefined;
    deleteMany?: FeaturesScalarWhereInput[] | undefined;
}
