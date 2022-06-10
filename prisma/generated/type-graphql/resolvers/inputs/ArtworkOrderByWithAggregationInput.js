"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCountOrderByAggregateInput_1 = require("../inputs/ArtworkCountOrderByAggregateInput");
const ArtworkMaxOrderByAggregateInput_1 = require("../inputs/ArtworkMaxOrderByAggregateInput");
const ArtworkMinOrderByAggregateInput_1 = require("../inputs/ArtworkMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ArtworkOrderByWithAggregationInput = class ArtworkOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithAggregationInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithAggregationInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithAggregationInput.prototype, "inventoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCountOrderByAggregateInput_1.ArtworkCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCountOrderByAggregateInput_1.ArtworkCountOrderByAggregateInput)
], ArtworkOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkMaxOrderByAggregateInput_1.ArtworkMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkMaxOrderByAggregateInput_1.ArtworkMaxOrderByAggregateInput)
], ArtworkOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkMinOrderByAggregateInput_1.ArtworkMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkMinOrderByAggregateInput_1.ArtworkMinOrderByAggregateInput)
], ArtworkOrderByWithAggregationInput.prototype, "_min", void 0);
ArtworkOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkOrderByWithAggregationInput", {
        isAbstract: true
    })
], ArtworkOrderByWithAggregationInput);
exports.ArtworkOrderByWithAggregationInput = ArtworkOrderByWithAggregationInput;
