"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCountAggregate_1 = require("../outputs/DocumentCountAggregate");
const DocumentMaxAggregate_1 = require("../outputs/DocumentMaxAggregate");
const DocumentMinAggregate_1 = require("../outputs/DocumentMinAggregate");
const DOCUMENT_INDEX_STATUS_1 = require("../../enums/DOCUMENT_INDEX_STATUS");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let DocumentGroupBy = class DocumentGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentGroupBy.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentGroupBy.prototype, "indexStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentGroupBy.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentGroupBy.prototype, "source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentGroupBy.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], DocumentGroupBy.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], DocumentGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], DocumentGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCountAggregate_1.DocumentCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCountAggregate_1.DocumentCountAggregate)
], DocumentGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentMinAggregate_1.DocumentMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentMinAggregate_1.DocumentMinAggregate)
], DocumentGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentMaxAggregate_1.DocumentMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentMaxAggregate_1.DocumentMaxAggregate)
], DocumentGroupBy.prototype, "_max", void 0);
DocumentGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("DocumentGroupBy", {
        isAbstract: true
    })
], DocumentGroupBy);
exports.DocumentGroupBy = DocumentGroupBy;
