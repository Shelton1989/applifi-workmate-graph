"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCountOrderByAggregateInput_1 = require("../inputs/InventoryCountOrderByAggregateInput");
const InventoryMaxOrderByAggregateInput_1 = require("../inputs/InventoryMaxOrderByAggregateInput");
const InventoryMinOrderByAggregateInput_1 = require("../inputs/InventoryMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let InventoryOrderByWithAggregationInput = class InventoryOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCountOrderByAggregateInput_1.InventoryCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCountOrderByAggregateInput_1.InventoryCountOrderByAggregateInput)
], InventoryOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMaxOrderByAggregateInput_1.InventoryMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMaxOrderByAggregateInput_1.InventoryMaxOrderByAggregateInput)
], InventoryOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMinOrderByAggregateInput_1.InventoryMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMinOrderByAggregateInput_1.InventoryMinOrderByAggregateInput)
], InventoryOrderByWithAggregationInput.prototype, "_min", void 0);
InventoryOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryOrderByWithAggregationInput", {
        isAbstract: true
    })
], InventoryOrderByWithAggregationInput);
exports.InventoryOrderByWithAggregationInput = InventoryOrderByWithAggregationInput;
