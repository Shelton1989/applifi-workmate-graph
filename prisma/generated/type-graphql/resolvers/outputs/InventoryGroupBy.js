"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCountAggregate_1 = require("../outputs/InventoryCountAggregate");
const InventoryMaxAggregate_1 = require("../outputs/InventoryMaxAggregate");
const InventoryMinAggregate_1 = require("../outputs/InventoryMinAggregate");
let InventoryGroupBy = class InventoryGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCountAggregate_1.InventoryCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCountAggregate_1.InventoryCountAggregate)
], InventoryGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMinAggregate_1.InventoryMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMinAggregate_1.InventoryMinAggregate)
], InventoryGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryMaxAggregate_1.InventoryMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryMaxAggregate_1.InventoryMaxAggregate)
], InventoryGroupBy.prototype, "_max", void 0);
InventoryGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InventoryGroupBy", {
        isAbstract: true
    })
], InventoryGroupBy);
exports.InventoryGroupBy = InventoryGroupBy;
