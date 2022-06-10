"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpdateWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProductUpdateManyWithoutInventoryInput_1 = require("../inputs/ProductUpdateManyWithoutInventoryInput");
const UserUpdateOneRequiredWithoutInventoryInput_1 = require("../inputs/UserUpdateOneRequiredWithoutInventoryInput");
let InventoryUpdateWithoutArtworkInput = class InventoryUpdateWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutInventoryInput_1.ProductUpdateManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutInventoryInput_1.ProductUpdateManyWithoutInventoryInput)
], InventoryUpdateWithoutArtworkInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutInventoryInput_1.UserUpdateOneRequiredWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutInventoryInput_1.UserUpdateOneRequiredWithoutInventoryInput)
], InventoryUpdateWithoutArtworkInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InventoryUpdateWithoutArtworkInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InventoryUpdateWithoutArtworkInput.prototype, "updatedAt", void 0);
InventoryUpdateWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpdateWithoutArtworkInput", {
        isAbstract: true
    })
], InventoryUpdateWithoutArtworkInput);
exports.InventoryUpdateWithoutArtworkInput = InventoryUpdateWithoutArtworkInput;
