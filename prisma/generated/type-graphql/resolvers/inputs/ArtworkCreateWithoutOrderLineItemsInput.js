"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateproductIdsInput_1 = require("../inputs/ArtworkCreateproductIdsInput");
const InventoryCreateNestedOneWithoutArtworkInput_1 = require("../inputs/InventoryCreateNestedOneWithoutArtworkInput");
const ProductCreateNestedManyWithoutArtworkInput_1 = require("../inputs/ProductCreateNestedManyWithoutArtworkInput");
let ArtworkCreateWithoutOrderLineItemsInput = class ArtworkCreateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutOrderLineItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutOrderLineItemsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutOrderLineItemsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutOrderLineItemsInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutOrderLineItemsInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutArtworkInput_1.ProductCreateNestedManyWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutArtworkInput_1.ProductCreateNestedManyWithoutArtworkInput)
], ArtworkCreateWithoutOrderLineItemsInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput)
], ArtworkCreateWithoutOrderLineItemsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutArtworkInput_1.InventoryCreateNestedOneWithoutArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutArtworkInput_1.InventoryCreateNestedOneWithoutArtworkInput)
], ArtworkCreateWithoutOrderLineItemsInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
ArtworkCreateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ArtworkCreateWithoutOrderLineItemsInput);
exports.ArtworkCreateWithoutOrderLineItemsInput = ArtworkCreateWithoutOrderLineItemsInput;
