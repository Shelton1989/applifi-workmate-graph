"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedManyWithoutInventoryInput_1 = require("../inputs/ProductCreateNestedManyWithoutInventoryInput");
const UserCreateNestedOneWithoutInventoryInput_1 = require("../inputs/UserCreateNestedOneWithoutInventoryInput");
let InventoryCreateWithoutArtworkInput = class InventoryCreateWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryCreateWithoutArtworkInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutInventoryInput_1.ProductCreateNestedManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutInventoryInput_1.ProductCreateNestedManyWithoutInventoryInput)
], InventoryCreateWithoutArtworkInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutInventoryInput_1.UserCreateNestedOneWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutInventoryInput_1.UserCreateNestedOneWithoutInventoryInput)
], InventoryCreateWithoutArtworkInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryCreateWithoutArtworkInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryCreateWithoutArtworkInput.prototype, "updatedAt", void 0);
InventoryCreateWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateWithoutArtworkInput", {
        isAbstract: true
    })
], InventoryCreateWithoutArtworkInput);
exports.InventoryCreateWithoutArtworkInput = InventoryCreateWithoutArtworkInput;
