import { DocumentCreateInput } from "../../../inputs/DocumentCreateInput";
import { DocumentUpdateInput } from "../../../inputs/DocumentUpdateInput";
import { DocumentWhereUniqueInput } from "../../../inputs/DocumentWhereUniqueInput";
export declare class UpsertDocumentArgs {
    where: DocumentWhereUniqueInput;
    create: DocumentCreateInput;
    update: DocumentUpdateInput;
}
