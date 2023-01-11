import { PriceCreateManyExperienceInputEnvelope } from "../inputs/PriceCreateManyExperienceInputEnvelope";
import { PriceCreateOrConnectWithoutExperienceInput } from "../inputs/PriceCreateOrConnectWithoutExperienceInput";
import { PriceCreateWithoutExperienceInput } from "../inputs/PriceCreateWithoutExperienceInput";
import { PriceScalarWhereInput } from "../inputs/PriceScalarWhereInput";
import { PriceUpdateManyWithWhereWithoutExperienceInput } from "../inputs/PriceUpdateManyWithWhereWithoutExperienceInput";
import { PriceUpdateWithWhereUniqueWithoutExperienceInput } from "../inputs/PriceUpdateWithWhereUniqueWithoutExperienceInput";
import { PriceUpsertWithWhereUniqueWithoutExperienceInput } from "../inputs/PriceUpsertWithWhereUniqueWithoutExperienceInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceUpdateManyWithoutExperienceInput {
    create?: PriceCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutExperienceInput[] | undefined;
    upsert?: PriceUpsertWithWhereUniqueWithoutExperienceInput[] | undefined;
    createMany?: PriceCreateManyExperienceInputEnvelope | undefined;
    set?: PriceWhereUniqueInput[] | undefined;
    disconnect?: PriceWhereUniqueInput[] | undefined;
    delete?: PriceWhereUniqueInput[] | undefined;
    connect?: PriceWhereUniqueInput[] | undefined;
    update?: PriceUpdateWithWhereUniqueWithoutExperienceInput[] | undefined;
    updateMany?: PriceUpdateManyWithWhereWithoutExperienceInput[] | undefined;
    deleteMany?: PriceScalarWhereInput[] | undefined;
}
