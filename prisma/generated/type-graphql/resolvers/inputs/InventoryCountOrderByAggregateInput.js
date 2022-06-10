"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let InventoryCountOrderByAggregateInput = class InventoryCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryCountOrderByAggregateInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryCountOrderByAggregateInput.prototype, "updatedAt", void 0);
InventoryCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCountOrderByAggregateInput", {
        isAbstract: true
    })
], InventoryCountOrderByAggregateInput);
exports.InventoryCountOrderByAggregateInput = InventoryCountOrderByAggregateInput;
