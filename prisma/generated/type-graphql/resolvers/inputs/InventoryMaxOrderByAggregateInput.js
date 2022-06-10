"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventoryMaxOrderByAggregateInput = class InventoryMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMaxOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
InventoryMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryMaxOrderByAggregateInput", {
        isAbstract: true
    })
], InventoryMaxOrderByAggregateInput);
exports.InventoryMaxOrderByAggregateInput = InventoryMaxOrderByAggregateInput;
