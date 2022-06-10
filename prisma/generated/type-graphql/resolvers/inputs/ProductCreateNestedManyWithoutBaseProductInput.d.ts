import { ProductCreateManyBaseProductInputEnvelope } from "../inputs/ProductCreateManyBaseProductInputEnvelope";
import { ProductCreateOrConnectWithoutBaseProductInput } from "../inputs/ProductCreateOrConnectWithoutBaseProductInput";
import { ProductCreateWithoutBaseProductInput } from "../inputs/ProductCreateWithoutBaseProductInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutBaseProductInput {
    create?: ProductCreateWithoutBaseProductInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutBaseProductInput[] | undefined;
    createMany?: ProductCreateManyBaseProductInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
