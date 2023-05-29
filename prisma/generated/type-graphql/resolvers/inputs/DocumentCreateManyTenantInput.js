"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentCreateManyTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let DocumentCreateManyTenantInput = class DocumentCreateManyTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateManyTenantInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateManyTenantInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateManyTenantInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentCreateManyTenantInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DocumentCreateManyTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DocumentCreateManyTenantInput.prototype, "updatedAt", void 0);
DocumentCreateManyTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentCreateManyTenantInput", {
        isAbstract: true
    })
], DocumentCreateManyTenantInput);
exports.DocumentCreateManyTenantInput = DocumentCreateManyTenantInput;
