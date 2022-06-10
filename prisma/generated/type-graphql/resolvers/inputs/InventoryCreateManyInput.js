"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let InventoryCreateManyInput = class InventoryCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], InventoryCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryCreateManyInput.prototype, "updatedAt", void 0);
InventoryCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateManyInput", {
        isAbstract: true
    })
], InventoryCreateManyInput);
exports.InventoryCreateManyInput = InventoryCreateManyInput;
