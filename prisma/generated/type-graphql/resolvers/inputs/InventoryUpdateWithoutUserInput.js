"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateManyWithoutInventoryInput_1 = require("../inputs/ArtworkUpdateManyWithoutInventoryInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProductUpdateManyWithoutInventoryInput_1 = require("../inputs/ProductUpdateManyWithoutInventoryInput");
let InventoryUpdateWithoutUserInput = class InventoryUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutInventoryInput_1.ProductUpdateManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutInventoryInput_1.ProductUpdateManyWithoutInventoryInput)
], InventoryUpdateWithoutUserInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateManyWithoutInventoryInput_1.ArtworkUpdateManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateManyWithoutInventoryInput_1.ArtworkUpdateManyWithoutInventoryInput)
], InventoryUpdateWithoutUserInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InventoryUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InventoryUpdateWithoutUserInput.prototype, "updatedAt", void 0);
InventoryUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpdateWithoutUserInput", {
        isAbstract: true
    })
], InventoryUpdateWithoutUserInput);
exports.InventoryUpdateWithoutUserInput = InventoryUpdateWithoutUserInput;
