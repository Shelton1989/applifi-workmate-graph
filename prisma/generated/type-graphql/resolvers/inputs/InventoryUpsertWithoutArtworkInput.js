"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpsertWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InventoryCreateWithoutArtworkInput_1 = require("../inputs/InventoryCreateWithoutArtworkInput");
const InventoryUpdateWithoutArtworkInput_1 = require("../inputs/InventoryUpdateWithoutArtworkInput");
let InventoryUpsertWithoutArtworkInput = class InventoryUpsertWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateWithoutArtworkInput_1.InventoryUpdateWithoutArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryUpdateWithoutArtworkInput_1.InventoryUpdateWithoutArtworkInput)
], InventoryUpsertWithoutArtworkInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateWithoutArtworkInput_1.InventoryCreateWithoutArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateWithoutArtworkInput_1.InventoryCreateWithoutArtworkInput)
], InventoryUpsertWithoutArtworkInput.prototype, "create", void 0);
InventoryUpsertWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpsertWithoutArtworkInput", {
        isAbstract: true
    })
], InventoryUpsertWithoutArtworkInput);
exports.InventoryUpsertWithoutArtworkInput = InventoryUpsertWithoutArtworkInput;
