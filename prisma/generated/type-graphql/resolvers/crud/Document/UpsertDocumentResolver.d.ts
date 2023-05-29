import { GraphQLResolveInfo } from "graphql";
import { UpsertDocumentArgs } from "./args/UpsertDocumentArgs";
import { Document } from "../../../models/Document";
export declare class UpsertDocumentResolver {
    upsertDocument(ctx: any, info: GraphQLResolveInfo, args: UpsertDocumentArgs): Promise<Document>;
}
