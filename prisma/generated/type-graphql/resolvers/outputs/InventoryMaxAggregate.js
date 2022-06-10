"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InventoryMaxAggregate = class InventoryMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryMaxAggregate.prototype, "updatedAt", void 0);
InventoryMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InventoryMaxAggregate", {
        isAbstract: true
    })
], InventoryMaxAggregate);
exports.InventoryMaxAggregate = InventoryMaxAggregate;
