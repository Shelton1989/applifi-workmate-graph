import { ColorOrderByWithRelationInput } from "../../../inputs/ColorOrderByWithRelationInput";
import { ColorWhereInput } from "../../../inputs/ColorWhereInput";
import { ColorWhereUniqueInput } from "../../../inputs/ColorWhereUniqueInput";
export declare class ProductColorsArgs {
    where?: ColorWhereInput | undefined;
    orderBy?: ColorOrderByWithRelationInput[] | undefined;
    cursor?: ColorWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "hex" | "productIds" | "createdAt" | "updatedAt"> | undefined;
}
