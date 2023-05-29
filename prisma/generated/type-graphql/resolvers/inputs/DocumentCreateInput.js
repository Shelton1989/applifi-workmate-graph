"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutDocumentInput_1 = require("../inputs/CommentCreateNestedManyWithoutDocumentInput");
const TenantCreateNestedOneWithoutDocumentsInput_1 = require("../inputs/TenantCreateNestedOneWithoutDocumentsInput");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let DocumentCreateInput = class DocumentCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutDocumentsInput_1.TenantCreateNestedOneWithoutDocumentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutDocumentsInput_1.TenantCreateNestedOneWithoutDocumentsInput)
], DocumentCreateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutDocumentInput_1.CommentCreateNestedManyWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutDocumentInput_1.CommentCreateNestedManyWithoutDocumentInput)
], DocumentCreateInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DocumentCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DocumentCreateInput.prototype, "updatedAt", void 0);
DocumentCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateInput", {
        isAbstract: true
    })
], DocumentCreateInput);
exports.DocumentCreateInput = DocumentCreateInput;
