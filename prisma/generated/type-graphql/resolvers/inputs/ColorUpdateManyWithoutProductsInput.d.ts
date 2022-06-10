import { ColorCreateOrConnectWithoutProductsInput } from "../inputs/ColorCreateOrConnectWithoutProductsInput";
import { ColorCreateWithoutProductsInput } from "../inputs/ColorCreateWithoutProductsInput";
import { ColorScalarWhereInput } from "../inputs/ColorScalarWhereInput";
import { ColorUpdateManyWithWhereWithoutProductsInput } from "../inputs/ColorUpdateManyWithWhereWithoutProductsInput";
import { ColorUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/ColorUpdateWithWhereUniqueWithoutProductsInput";
import { ColorUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/ColorUpsertWithWhereUniqueWithoutProductsInput";
import { ColorWhereUniqueInput } from "../inputs/ColorWhereUniqueInput";
export declare class ColorUpdateManyWithoutProductsInput {
    create?: ColorCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: ColorCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: ColorUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    set?: ColorWhereUniqueInput[] | undefined;
    disconnect?: ColorWhereUniqueInput[] | undefined;
    delete?: ColorWhereUniqueInput[] | undefined;
    connect?: ColorWhereUniqueInput[] | undefined;
    update?: ColorUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: ColorUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: ColorScalarWhereInput[] | undefined;
}
