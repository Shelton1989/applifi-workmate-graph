"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DocumentCountOrderByAggregateInput_1 = require("../inputs/DocumentCountOrderByAggregateInput");
const DocumentMaxOrderByAggregateInput_1 = require("../inputs/DocumentMaxOrderByAggregateInput");
const DocumentMinOrderByAggregateInput_1 = require("../inputs/DocumentMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DocumentOrderByWithAggregationInput = class DocumentOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "indexStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "documentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "createdByUserId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DocumentOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCountOrderByAggregateInput_1.DocumentCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCountOrderByAggregateInput_1.DocumentCountOrderByAggregateInput)
], DocumentOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentMaxOrderByAggregateInput_1.DocumentMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentMaxOrderByAggregateInput_1.DocumentMaxOrderByAggregateInput)
], DocumentOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentMinOrderByAggregateInput_1.DocumentMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentMinOrderByAggregateInput_1.DocumentMinOrderByAggregateInput)
], DocumentOrderByWithAggregationInput.prototype, "_min", void 0);
DocumentOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentOrderByWithAggregationInput", {
        isAbstract: true
    })
], DocumentOrderByWithAggregationInput);
exports.DocumentOrderByWithAggregationInput = DocumentOrderByWithAggregationInput;
