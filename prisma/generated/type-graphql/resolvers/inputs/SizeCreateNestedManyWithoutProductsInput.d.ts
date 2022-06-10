import { SizeCreateOrConnectWithoutProductsInput } from "../inputs/SizeCreateOrConnectWithoutProductsInput";
import { SizeCreateWithoutProductsInput } from "../inputs/SizeCreateWithoutProductsInput";
import { SizeWhereUniqueInput } from "../inputs/SizeWhereUniqueInput";
export declare class SizeCreateNestedManyWithoutProductsInput {
    create?: SizeCreateWithoutProductsInput[] | undefined;
    connectOrCreate?: SizeCreateOrConnectWithoutProductsInput[] | undefined;
    connect?: SizeWhereUniqueInput[] | undefined;
}
