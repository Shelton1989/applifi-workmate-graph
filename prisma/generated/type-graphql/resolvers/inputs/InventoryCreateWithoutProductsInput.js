"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedManyWithoutInventoryInput_1 = require("../inputs/ArtworkCreateNestedManyWithoutInventoryInput");
const UserCreateNestedOneWithoutInventoryInput_1 = require("../inputs/UserCreateNestedOneWithoutInventoryInput");
let InventoryCreateWithoutProductsInput = class InventoryCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryCreateWithoutProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedManyWithoutInventoryInput_1.ArtworkCreateNestedManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedManyWithoutInventoryInput_1.ArtworkCreateNestedManyWithoutInventoryInput)
], InventoryCreateWithoutProductsInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutInventoryInput_1.UserCreateNestedOneWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutInventoryInput_1.UserCreateNestedOneWithoutInventoryInput)
], InventoryCreateWithoutProductsInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryCreateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryCreateWithoutProductsInput.prototype, "updatedAt", void 0);
InventoryCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateWithoutProductsInput", {
        isAbstract: true
    })
], InventoryCreateWithoutProductsInput);
exports.InventoryCreateWithoutProductsInput = InventoryCreateWithoutProductsInput;
