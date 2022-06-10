"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkCreateWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateproductIdsInput_1 = require("../inputs/ArtworkCreateproductIdsInput");
const OrderLineItemCreateNestedManyWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedArtworkInput");
const ProductCreateNestedManyWithoutArtworkInput_1 = require("../inputs/ProductCreateNestedManyWithoutArtworkInput");
let ArtworkCreateWithoutInventoryInput = class ArtworkCreateWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutInventoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutInventoryInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutInventoryInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutInventoryInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkCreateWithoutInventoryInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutArtworkInput_1.ProductCreateNestedManyWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutArtworkInput_1.ProductCreateNestedManyWithoutArtworkInput)
], ArtworkCreateWithoutInventoryInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateproductIdsInput_1.ArtworkCreateproductIdsInput)
], ArtworkCreateWithoutInventoryInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedArtworkInput_1.OrderLineItemCreateNestedManyWithoutSelectedArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedArtworkInput_1.OrderLineItemCreateNestedManyWithoutSelectedArtworkInput)
], ArtworkCreateWithoutInventoryInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateWithoutInventoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkCreateWithoutInventoryInput.prototype, "updatedAt", void 0);
ArtworkCreateWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkCreateWithoutInventoryInput", {
        isAbstract: true
    })
], ArtworkCreateWithoutInventoryInput);
exports.ArtworkCreateWithoutInventoryInput = ArtworkCreateWithoutInventoryInput;
