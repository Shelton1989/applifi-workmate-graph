"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCountOrderByAggregateInput_1 = require("../inputs/BrandCountOrderByAggregateInput");
const BrandMaxOrderByAggregateInput_1 = require("../inputs/BrandMaxOrderByAggregateInput");
const BrandMinOrderByAggregateInput_1 = require("../inputs/BrandMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BrandOrderByWithAggregationInput = class BrandOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithAggregationInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCountOrderByAggregateInput_1.BrandCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandCountOrderByAggregateInput_1.BrandCountOrderByAggregateInput)
], BrandOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandMaxOrderByAggregateInput_1.BrandMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandMaxOrderByAggregateInput_1.BrandMaxOrderByAggregateInput)
], BrandOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandMinOrderByAggregateInput_1.BrandMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandMinOrderByAggregateInput_1.BrandMinOrderByAggregateInput)
], BrandOrderByWithAggregationInput.prototype, "_min", void 0);
BrandOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandOrderByWithAggregationInput", {
        isAbstract: true
    })
], BrandOrderByWithAggregationInput);
exports.BrandOrderByWithAggregationInput = BrandOrderByWithAggregationInput;
