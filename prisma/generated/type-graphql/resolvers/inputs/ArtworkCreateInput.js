"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateproductIdsInput_1 = require("../inputs/ArtworkCreateproductIdsInput");
const InventoryCreateNestedOneWithoutArtworkInput_1 = require("../inputs/InventoryCreateNestedOneWithoutArtworkInput");
const OrderLineItemCreateNestedManyWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedArtworkInput");
const ProductCreateNestedManyWithoutArtworkInput_1 = require("../inputs/ProductCreateNestedManyWithoutArtworkInput");
let ArtworkCreateInput = class ArtworkCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutArtworkInput_1.ProductCreateNestedManyWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutArtworkInput_1.ProductCreateNestedManyWithoutArtworkInput)
], ArtworkCreateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput)
], ArtworkCreateInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutArtworkInput_1.InventoryCreateNestedOneWithoutArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutArtworkInput_1.InventoryCreateNestedOneWithoutArtworkInput)
], ArtworkCreateInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedArtworkInput_1.OrderLineItemCreateNestedManyWithoutSelectedArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedArtworkInput_1.OrderLineItemCreateNestedManyWithoutSelectedArtworkInput)
], ArtworkCreateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateInput.prototype, "updatedAt", void 0);
ArtworkCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateInput", {
        isAbstract: true
    })
], ArtworkCreateInput);
exports.ArtworkCreateInput = ArtworkCreateInput;
