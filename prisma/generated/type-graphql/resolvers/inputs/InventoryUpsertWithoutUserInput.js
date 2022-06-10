"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateWithoutUserInput_1 = require("../inputs/InventoryCreateWithoutUserInput");
const InventoryUpdateWithoutUserInput_1 = require("../inputs/InventoryUpdateWithoutUserInput");
let InventoryUpsertWithoutUserInput = class InventoryUpsertWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateWithoutUserInput_1.InventoryUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryUpdateWithoutUserInput_1.InventoryUpdateWithoutUserInput)
], InventoryUpsertWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutUserInput_1.InventoryCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutUserInput_1.InventoryCreateWithoutUserInput)
], InventoryUpsertWithoutUserInput.prototype, "create", void 0);
InventoryUpsertWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpsertWithoutUserInput", {
        isAbstract: true
    })
], InventoryUpsertWithoutUserInput);
exports.InventoryUpsertWithoutUserInput = InventoryUpsertWithoutUserInput;
