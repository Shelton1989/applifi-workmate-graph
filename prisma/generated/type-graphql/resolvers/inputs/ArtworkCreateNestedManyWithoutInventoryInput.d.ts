import { ArtworkCreateManyInventoryInputEnvelope } from "../inputs/ArtworkCreateManyInventoryInputEnvelope";
import { ArtworkCreateOrConnectWithoutInventoryInput } from "../inputs/ArtworkCreateOrConnectWithoutInventoryInput";
import { ArtworkCreateWithoutInventoryInput } from "../inputs/ArtworkCreateWithoutInventoryInput";
import { ArtworkWhereUniqueInput } from "../inputs/ArtworkWhereUniqueInput";
export declare class ArtworkCreateNestedManyWithoutInventoryInput {
    create?: ArtworkCreateWithoutInventoryInput[] | undefined;
    connectOrCreate?: ArtworkCreateOrConnectWithoutInventoryInput[] | undefined;
    createMany?: ArtworkCreateManyInventoryInputEnvelope | undefined;
    connect?: ArtworkWhereUniqueInput[] | undefined;
}
