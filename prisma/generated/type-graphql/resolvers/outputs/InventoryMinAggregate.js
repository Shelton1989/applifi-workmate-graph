"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InventoryMinAggregate = class InventoryMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryMinAggregate.prototype, "updatedAt", void 0);
InventoryMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("InventoryMinAggregate", {
        isAbstract: true
    })
], InventoryMinAggregate);
exports.InventoryMinAggregate = InventoryMinAggregate;
