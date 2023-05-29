import { DocumentCreateOrConnectWithoutCommentsInput } from "../inputs/DocumentCreateOrConnectWithoutCommentsInput";
import { DocumentCreateWithoutCommentsInput } from "../inputs/DocumentCreateWithoutCommentsInput";
import { DocumentUpdateWithoutCommentsInput } from "../inputs/DocumentUpdateWithoutCommentsInput";
import { DocumentUpsertWithoutCommentsInput } from "../inputs/DocumentUpsertWithoutCommentsInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";
export declare class DocumentUpdateOneRequiredWithoutCommentsInput {
    create?: DocumentCreateWithoutCommentsInput | undefined;
    connectOrCreate?: DocumentCreateOrConnectWithoutCommentsInput | undefined;
    upsert?: DocumentUpsertWithoutCommentsInput | undefined;
    connect?: DocumentWhereUniqueInput | undefined;
    update?: DocumentUpdateWithoutCommentsInput | undefined;
}
