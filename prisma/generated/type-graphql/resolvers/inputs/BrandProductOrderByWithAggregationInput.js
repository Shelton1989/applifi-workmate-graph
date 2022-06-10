"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductCountOrderByAggregateInput_1 = require("../inputs/BrandProductCountOrderByAggregateInput");
const BrandProductMaxOrderByAggregateInput_1 = require("../inputs/BrandProductMaxOrderByAggregateInput");
const BrandProductMinOrderByAggregateInput_1 = require("../inputs/BrandProductMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BrandProductOrderByWithAggregationInput = class BrandProductOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByWithAggregationInput.prototype, "releaseYear", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByWithAggregationInput.prototype, "brandId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BrandProductOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCountOrderByAggregateInput_1.BrandProductCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCountOrderByAggregateInput_1.BrandProductCountOrderByAggregateInput)
], BrandProductOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductMaxOrderByAggregateInput_1.BrandProductMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductMaxOrderByAggregateInput_1.BrandProductMaxOrderByAggregateInput)
], BrandProductOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductMinOrderByAggregateInput_1.BrandProductMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductMinOrderByAggregateInput_1.BrandProductMinOrderByAggregateInput)
], BrandProductOrderByWithAggregationInput.prototype, "_min", void 0);
BrandProductOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductOrderByWithAggregationInput", {
        isAbstract: true
    })
], BrandProductOrderByWithAggregationInput);
exports.BrandProductOrderByWithAggregationInput = BrandProductOrderByWithAggregationInput;
