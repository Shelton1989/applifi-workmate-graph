"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateManyWithoutInventoryInput_1 = require("../inputs/ArtworkUpdateManyWithoutInventoryInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProductUpdateManyWithoutInventoryInput_1 = require("../inputs/ProductUpdateManyWithoutInventoryInput");
const UserUpdateOneRequiredWithoutInventoryInput_1 = require("../inputs/UserUpdateOneRequiredWithoutInventoryInput");
let InventoryUpdateInput = class InventoryUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutInventoryInput_1.ProductUpdateManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutInventoryInput_1.ProductUpdateManyWithoutInventoryInput)
], InventoryUpdateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateManyWithoutInventoryInput_1.ArtworkUpdateManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateManyWithoutInventoryInput_1.ArtworkUpdateManyWithoutInventoryInput)
], InventoryUpdateInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutInventoryInput_1.UserUpdateOneRequiredWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutInventoryInput_1.UserUpdateOneRequiredWithoutInventoryInput)
], InventoryUpdateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InventoryUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InventoryUpdateInput.prototype, "updatedAt", void 0);
InventoryUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpdateInput", {
        isAbstract: true
    })
], InventoryUpdateInput);
exports.InventoryUpdateInput = InventoryUpdateInput;
