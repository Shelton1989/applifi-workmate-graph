"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpdateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateManyWithoutInventoryInput_1 = require("../inputs/ArtworkUpdateManyWithoutInventoryInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutInventoryInput_1 = require("../inputs/UserUpdateOneRequiredWithoutInventoryInput");
let InventoryUpdateWithoutProductsInput = class InventoryUpdateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateManyWithoutInventoryInput_1.ArtworkUpdateManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateManyWithoutInventoryInput_1.ArtworkUpdateManyWithoutInventoryInput)
], InventoryUpdateWithoutProductsInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutInventoryInput_1.UserUpdateOneRequiredWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutInventoryInput_1.UserUpdateOneRequiredWithoutInventoryInput)
], InventoryUpdateWithoutProductsInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InventoryUpdateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InventoryUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
InventoryUpdateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpdateWithoutProductsInput", {
        isAbstract: true
    })
], InventoryUpdateWithoutProductsInput);
exports.InventoryUpdateWithoutProductsInput = InventoryUpdateWithoutProductsInput;
