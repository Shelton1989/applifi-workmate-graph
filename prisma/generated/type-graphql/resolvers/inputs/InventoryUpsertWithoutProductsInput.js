"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpsertWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateWithoutProductsInput_1 = require("../inputs/InventoryCreateWithoutProductsInput");
const InventoryUpdateWithoutProductsInput_1 = require("../inputs/InventoryUpdateWithoutProductsInput");
let InventoryUpsertWithoutProductsInput = class InventoryUpsertWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateWithoutProductsInput_1.InventoryUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryUpdateWithoutProductsInput_1.InventoryUpdateWithoutProductsInput)
], InventoryUpsertWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutProductsInput_1.InventoryCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutProductsInput_1.InventoryCreateWithoutProductsInput)
], InventoryUpsertWithoutProductsInput.prototype, "create", void 0);
InventoryUpsertWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpsertWithoutProductsInput", {
        isAbstract: true
    })
], InventoryUpsertWithoutProductsInput);
exports.InventoryUpsertWithoutProductsInput = InventoryUpsertWithoutProductsInput;
