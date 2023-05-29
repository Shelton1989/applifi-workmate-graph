"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutDocumentInput_1 = require("../inputs/CommentCreateNestedManyWithoutDocumentInput");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let DocumentCreateWithoutTenantInput = class DocumentCreateWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateWithoutTenantInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateWithoutTenantInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateWithoutTenantInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateWithoutTenantInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutDocumentInput_1.CommentCreateNestedManyWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutDocumentInput_1.CommentCreateNestedManyWithoutDocumentInput)
], DocumentCreateWithoutTenantInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DocumentCreateWithoutTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DocumentCreateWithoutTenantInput.prototype, "updatedAt", void 0);
DocumentCreateWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateWithoutTenantInput", {
        isAbstract: true
    })
], DocumentCreateWithoutTenantInput);
exports.DocumentCreateWithoutTenantInput = DocumentCreateWithoutTenantInput;
