"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateproductIdsInput_1 = require("../inputs/ArtworkCreateproductIdsInput");
const InventoryCreateNestedOneWithoutArtworkInput_1 = require("../inputs/InventoryCreateNestedOneWithoutArtworkInput");
const OrderLineItemCreateNestedManyWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedArtworkInput");
let ArtworkCreateWithoutProductsInput = class ArtworkCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutProductsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutProductsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutProductsInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutProductsInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput)
], ArtworkCreateWithoutProductsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutArtworkInput_1.InventoryCreateNestedOneWithoutArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutArtworkInput_1.InventoryCreateNestedOneWithoutArtworkInput)
], ArtworkCreateWithoutProductsInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedArtworkInput_1.OrderLineItemCreateNestedManyWithoutSelectedArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedArtworkInput_1.OrderLineItemCreateNestedManyWithoutSelectedArtworkInput)
], ArtworkCreateWithoutProductsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateWithoutProductsInput.prototype, "updatedAt", void 0);
ArtworkCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateWithoutProductsInput", {
        isAbstract: true
    })
], ArtworkCreateWithoutProductsInput);
exports.ArtworkCreateWithoutProductsInput = ArtworkCreateWithoutProductsInput;
