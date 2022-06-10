import { ArtworkCreateInput } from "../../../inputs/ArtworkCreateInput";
import { ArtworkUpdateInput } from "../../../inputs/ArtworkUpdateInput";
import { ArtworkWhereUniqueInput } from "../../../inputs/ArtworkWhereUniqueInput";
export declare class UpsertArtworkArgs {
    where: ArtworkWhereUniqueInput;
    create: ArtworkCreateInput;
    update: ArtworkUpdateInput;
}
