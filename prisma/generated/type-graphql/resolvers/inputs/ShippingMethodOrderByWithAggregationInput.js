"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShippingMethodAvgOrderByAggregateInput_1 = require("../inputs/ShippingMethodAvgOrderByAggregateInput");
const ShippingMethodCountOrderByAggregateInput_1 = require("../inputs/ShippingMethodCountOrderByAggregateInput");
const ShippingMethodMaxOrderByAggregateInput_1 = require("../inputs/ShippingMethodMaxOrderByAggregateInput");
const ShippingMethodMinOrderByAggregateInput_1 = require("../inputs/ShippingMethodMinOrderByAggregateInput");
const ShippingMethodSumOrderByAggregateInput_1 = require("../inputs/ShippingMethodSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ShippingMethodOrderByWithAggregationInput = class ShippingMethodOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByWithAggregationInput.prototype, "label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByWithAggregationInput.prototype, "arrivalTimeInBusinessDays", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByWithAggregationInput.prototype, "arrivalTimeInBusinessDaysRang", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByWithAggregationInput.prototype, "arrivalTimeDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByWithAggregationInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShippingMethodOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodCountOrderByAggregateInput_1.ShippingMethodCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodCountOrderByAggregateInput_1.ShippingMethodCountOrderByAggregateInput)
], ShippingMethodOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodAvgOrderByAggregateInput_1.ShippingMethodAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodAvgOrderByAggregateInput_1.ShippingMethodAvgOrderByAggregateInput)
], ShippingMethodOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodMaxOrderByAggregateInput_1.ShippingMethodMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodMaxOrderByAggregateInput_1.ShippingMethodMaxOrderByAggregateInput)
], ShippingMethodOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodMinOrderByAggregateInput_1.ShippingMethodMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodMinOrderByAggregateInput_1.ShippingMethodMinOrderByAggregateInput)
], ShippingMethodOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodSumOrderByAggregateInput_1.ShippingMethodSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodSumOrderByAggregateInput_1.ShippingMethodSumOrderByAggregateInput)
], ShippingMethodOrderByWithAggregationInput.prototype, "_sum", void 0);
ShippingMethodOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShippingMethodOrderByWithAggregationInput", {
        isAbstract: true
    })
], ShippingMethodOrderByWithAggregationInput);
exports.ShippingMethodOrderByWithAggregationInput = ShippingMethodOrderByWithAggregationInput;
