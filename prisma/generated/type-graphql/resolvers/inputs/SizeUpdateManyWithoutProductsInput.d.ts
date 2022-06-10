import { SizeCreateOrConnectWithoutProductsInput } from "../inputs/SizeCreateOrConnectWithoutProductsInput";
import { SizeCreateWithoutProductsInput } from "../inputs/SizeCreateWithoutProductsInput";
import { SizeScalarWhereInput } from "../inputs/SizeScalarWhereInput";
import { SizeUpdateManyWithWhereWithoutProductsInput } from "../inputs/SizeUpdateManyWithWhereWithoutProductsInput";
import { SizeUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/SizeUpdateWithWhereUniqueWithoutProductsInput";
import { SizeUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/SizeUpsertWithWhereUniqueWithoutProductsInput";
import { SizeWhereUniqueInput } from "../inputs/SizeWhereUniqueInput";
export declare class SizeUpdateManyWithoutProductsInput {
    create?: SizeCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: SizeCreateOrConnectWithoutProductsInput[] | undefined;
    upsert?: SizeUpsertWithWhereUniqueWithoutProductsInput[] | undefined;
    set?: SizeWhereUniqueInput[] | undefined;
    disconnect?: SizeWhereUniqueInput[] | undefined;
    delete?: SizeWhereUniqueInput[] | undefined;
    connect?: SizeWhereUniqueInput[] | undefined;
    update?: SizeUpdateWithWhereUniqueWithoutProductsInput[] | undefined;
    updateMany?: SizeUpdateManyWithWhereWithoutProductsInput[] | undefined;
    deleteMany?: SizeScalarWhereInput[] | undefined;
}
