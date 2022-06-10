import { BrandProductCreateManyBrandInputEnvelope } from "../inputs/BrandProductCreateManyBrandInputEnvelope";
import { BrandProductCreateOrConnectWithoutBrandInput } from "../inputs/BrandProductCreateOrConnectWithoutBrandInput";
import { BrandProductCreateWithoutBrandInput } from "../inputs/BrandProductCreateWithoutBrandInput";
import { BrandProductWhereUniqueInput } from "../inputs/BrandProductWhereUniqueInput";
export declare class BrandProductCreateNestedManyWithoutBrandInput {
    create?: BrandProductCreateWithoutBrandInput[] | undefined;
    connectOrCreate?: BrandProductCreateOrConnectWithoutBrandInput[] | undefined;
    createMany?: BrandProductCreateManyBrandInputEnvelope | undefined;
    connect?: BrandProductWhereUniqueInput[] | undefined;
}
