import { BrandProductCreateManyBrandInputEnvelope } from "../inputs/BrandProductCreateManyBrandInputEnvelope";
import { BrandProductCreateOrConnectWithoutBrandInput } from "../inputs/BrandProductCreateOrConnectWithoutBrandInput";
import { BrandProductCreateWithoutBrandInput } from "../inputs/BrandProductCreateWithoutBrandInput";
import { BrandProductScalarWhereInput } from "../inputs/BrandProductScalarWhereInput";
import { BrandProductUpdateManyWithWhereWithoutBrandInput } from "../inputs/BrandProductUpdateManyWithWhereWithoutBrandInput";
import { BrandProductUpdateWithWhereUniqueWithoutBrandInput } from "../inputs/BrandProductUpdateWithWhereUniqueWithoutBrandInput";
import { BrandProductUpsertWithWhereUniqueWithoutBrandInput } from "../inputs/BrandProductUpsertWithWhereUniqueWithoutBrandInput";
import { BrandProductWhereUniqueInput } from "../inputs/BrandProductWhereUniqueInput";
export declare class BrandProductUpdateManyWithoutBrandInput {
    create?: BrandProductCreateWithoutBrandInput[] | undefined;
    connectOrCreate?: BrandProductCreateOrConnectWithoutBrandInput[] | undefined;
    upsert?: BrandProductUpsertWithWhereUniqueWithoutBrandInput[] | undefined;
    createMany?: BrandProductCreateManyBrandInputEnvelope | undefined;
    set?: BrandProductWhereUniqueInput[] | undefined;
    disconnect?: BrandProductWhereUniqueInput[] | undefined;
    delete?: BrandProductWhereUniqueInput[] | undefined;
    connect?: BrandProductWhereUniqueInput[] | undefined;
    update?: BrandProductUpdateWithWhereUniqueWithoutBrandInput[] | undefined;
    updateMany?: BrandProductUpdateManyWithWhereWithoutBrandInput[] | undefined;
    deleteMany?: BrandProductScalarWhereInput[] | undefined;
}
