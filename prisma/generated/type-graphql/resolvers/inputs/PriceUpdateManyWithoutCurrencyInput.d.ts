import { PriceCreateManyCurrencyInputEnvelope } from "../inputs/PriceCreateManyCurrencyInputEnvelope";
import { PriceCreateOrConnectWithoutCurrencyInput } from "../inputs/PriceCreateOrConnectWithoutCurrencyInput";
import { PriceCreateWithoutCurrencyInput } from "../inputs/PriceCreateWithoutCurrencyInput";
import { PriceScalarWhereInput } from "../inputs/PriceScalarWhereInput";
import { PriceUpdateManyWithWhereWithoutCurrencyInput } from "../inputs/PriceUpdateManyWithWhereWithoutCurrencyInput";
import { PriceUpdateWithWhereUniqueWithoutCurrencyInput } from "../inputs/PriceUpdateWithWhereUniqueWithoutCurrencyInput";
import { PriceUpsertWithWhereUniqueWithoutCurrencyInput } from "../inputs/PriceUpsertWithWhereUniqueWithoutCurrencyInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceUpdateManyWithoutCurrencyInput {
    create?: PriceCreateWithoutCurrencyInput[] | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutCurrencyInput[] | undefined;
    upsert?: PriceUpsertWithWhereUniqueWithoutCurrencyInput[] | undefined;
    createMany?: PriceCreateManyCurrencyInputEnvelope | undefined;
    set?: PriceWhereUniqueInput[] | undefined;
    disconnect?: PriceWhereUniqueInput[] | undefined;
    delete?: PriceWhereUniqueInput[] | undefined;
    connect?: PriceWhereUniqueInput[] | undefined;
    update?: PriceUpdateWithWhereUniqueWithoutCurrencyInput[] | undefined;
    updateMany?: PriceUpdateManyWithWhereWithoutCurrencyInput[] | undefined;
    deleteMany?: PriceScalarWhereInput[] | undefined;
}
