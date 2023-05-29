import { GraphQLResolveInfo } from "graphql";
import { DeleteDocumentArgs } from "./args/DeleteDocumentArgs";
import { Document } from "../../../models/Document";
export declare class DeleteDocumentResolver {
    deleteDocument(ctx: any, info: GraphQLResolveInfo, args: DeleteDocumentArgs): Promise<Document | null>;
}
