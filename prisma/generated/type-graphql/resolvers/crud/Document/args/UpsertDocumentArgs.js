"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertDocumentArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCreateInput_1 = require("../../../inputs/DocumentCreateInput");
const DocumentUpdateInput_1 = require("../../../inputs/DocumentUpdateInput");
const DocumentWhereUniqueInput_1 = require("../../../inputs/DocumentWhereUniqueInput");
let UpsertDocumentArgs = class UpsertDocumentArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentWhereUniqueInput_1.DocumentWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentWhereUniqueInput_1.DocumentWhereUniqueInput)
], UpsertDocumentArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateInput_1.DocumentCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentCreateInput_1.DocumentCreateInput)
], UpsertDocumentArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateInput_1.DocumentUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DocumentUpdateInput_1.DocumentUpdateInput)
], UpsertDocumentArgs.prototype, "update", void 0);
UpsertDocumentArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertDocumentArgs);
exports.UpsertDocumentArgs = UpsertDocumentArgs;
