"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedManyWithoutInventoryInput_1 = require("../inputs/ArtworkCreateNestedManyWithoutInventoryInput");
const ProductCreateNestedManyWithoutInventoryInput_1 = require("../inputs/ProductCreateNestedManyWithoutInventoryInput");
const UserCreateNestedOneWithoutInventoryInput_1 = require("../inputs/UserCreateNestedOneWithoutInventoryInput");
let InventoryCreateInput = class InventoryCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], InventoryCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutInventoryInput_1.ProductCreateNestedManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutInventoryInput_1.ProductCreateNestedManyWithoutInventoryInput)
], InventoryCreateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedManyWithoutInventoryInput_1.ArtworkCreateNestedManyWithoutInventoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedManyWithoutInventoryInput_1.ArtworkCreateNestedManyWithoutInventoryInput)
], InventoryCreateInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutInventoryInput_1.UserCreateNestedOneWithoutInventoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutInventoryInput_1.UserCreateNestedOneWithoutInventoryInput)
], InventoryCreateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], InventoryCreateInput.prototype, "updatedAt", void 0);
InventoryCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryCreateInput", {
        isAbstract: true
    })
], InventoryCreateInput);
exports.InventoryCreateInput = InventoryCreateInput;
