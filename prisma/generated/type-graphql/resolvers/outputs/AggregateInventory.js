"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateInventory = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCountAggregate_1 = require("../outputs/InventoryCountAggregate");
const InventoryMaxAggregate_1 = require("../outputs/InventoryMaxAggregate");
const InventoryMinAggregate_1 = require("../outputs/InventoryMinAggregate");
let AggregateInventory = class AggregateInventory {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCountAggregate_1.InventoryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCountAggregate_1.InventoryCountAggregate)
], AggregateInventory.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMinAggregate_1.InventoryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMinAggregate_1.InventoryMinAggregate)
], AggregateInventory.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMaxAggregate_1.InventoryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMaxAggregate_1.InventoryMaxAggregate)
], AggregateInventory.prototype, "_max", void 0);
AggregateInventory = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateInventory", {
        isAbstract: true
    })
], AggregateInventory);
exports.AggregateInventory = AggregateInventory;
