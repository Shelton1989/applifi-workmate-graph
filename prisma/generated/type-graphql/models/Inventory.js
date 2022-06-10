"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCount_1 = require("../resolvers/outputs/InventoryCount");
let Inventory = class Inventory {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Inventory.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Inventory.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Inventory.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Inventory.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCount_1.InventoryCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCount_1.InventoryCount)
], Inventory.prototype, "_count", void 0);
Inventory = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Inventory", {
        isAbstract: true
    })
], Inventory);
exports.Inventory = Inventory;
