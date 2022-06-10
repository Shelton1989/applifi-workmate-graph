"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCountOrderByAggregateInput_1 = require("../inputs/ColorCountOrderByAggregateInput");
const ColorMaxOrderByAggregateInput_1 = require("../inputs/ColorMaxOrderByAggregateInput");
const ColorMinOrderByAggregateInput_1 = require("../inputs/ColorMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ColorOrderByWithAggregationInput = class ColorOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorOrderByWithAggregationInput.prototype, "hex", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorOrderByWithAggregationInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCountOrderByAggregateInput_1.ColorCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCountOrderByAggregateInput_1.ColorCountOrderByAggregateInput)
], ColorOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorMaxOrderByAggregateInput_1.ColorMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorMaxOrderByAggregateInput_1.ColorMaxOrderByAggregateInput)
], ColorOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorMinOrderByAggregateInput_1.ColorMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorMinOrderByAggregateInput_1.ColorMinOrderByAggregateInput)
], ColorOrderByWithAggregationInput.prototype, "_min", void 0);
ColorOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorOrderByWithAggregationInput", {
        isAbstract: true
    })
], ColorOrderByWithAggregationInput);
exports.ColorOrderByWithAggregationInput = ColorOrderByWithAggregationInput;
