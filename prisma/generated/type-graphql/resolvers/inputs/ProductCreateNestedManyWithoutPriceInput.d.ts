import { ProductCreateManyPriceInputEnvelope } from "../inputs/ProductCreateManyPriceInputEnvelope";
import { ProductCreateOrConnectWithoutPriceInput } from "../inputs/ProductCreateOrConnectWithoutPriceInput";
import { ProductCreateWithoutPriceInput } from "../inputs/ProductCreateWithoutPriceInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutPriceInput {
    create?: ProductCreateWithoutPriceInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutPriceInput[] | undefined;
    createMany?: ProductCreateManyPriceInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
