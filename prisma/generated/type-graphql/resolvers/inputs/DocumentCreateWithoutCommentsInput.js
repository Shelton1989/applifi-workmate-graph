"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCreateNestedOneWithoutDocumentsInput_1 = require("../inputs/TenantCreateNestedOneWithoutDocumentsInput");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let DocumentCreateWithoutCommentsInput = class DocumentCreateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateWithoutCommentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateWithoutCommentsInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateWithoutCommentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateWithoutCommentsInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutDocumentsInput_1.TenantCreateNestedOneWithoutDocumentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutDocumentsInput_1.TenantCreateNestedOneWithoutDocumentsInput)
], DocumentCreateWithoutCommentsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DocumentCreateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DocumentCreateWithoutCommentsInput.prototype, "updatedAt", void 0);
DocumentCreateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateWithoutCommentsInput", {
        isAbstract: true
    })
], DocumentCreateWithoutCommentsInput);
exports.DocumentCreateWithoutCommentsInput = DocumentCreateWithoutCommentsInput;
