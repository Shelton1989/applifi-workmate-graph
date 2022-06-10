"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedManyWithoutInventoryInput_1 = require("../inputs/ArtworkCreateNestedManyWithoutInventoryInput");
const ProductCreateNestedManyWithoutInventoryInput_1 = require("../inputs/ProductCreateNestedManyWithoutInventoryInput");
let InventoryCreateWithoutUserInput = class InventoryCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutInventoryInput_1.ProductCreateNestedManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutInventoryInput_1.ProductCreateNestedManyWithoutInventoryInput)
], InventoryCreateWithoutUserInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedManyWithoutInventoryInput_1.ArtworkCreateNestedManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedManyWithoutInventoryInput_1.ArtworkCreateNestedManyWithoutInventoryInput)
], InventoryCreateWithoutUserInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryCreateWithoutUserInput.prototype, "updatedAt", void 0);
InventoryCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateWithoutUserInput", {
        isAbstract: true
    })
], InventoryCreateWithoutUserInput);
exports.InventoryCreateWithoutUserInput = InventoryCreateWithoutUserInput;
