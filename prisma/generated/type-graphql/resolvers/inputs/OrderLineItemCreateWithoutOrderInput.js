"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateNestedOneWithoutOrderLineItemsInput");
const ColorCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ColorCreateNestedOneWithoutOrderLineItemsInput");
const PriceCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/PriceCreateNestedOneWithoutOrderLineItemsInput");
const ProductCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ProductCreateNestedOneWithoutOrderLineItemsInput");
const SizeCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/SizeCreateNestedOneWithoutOrderLineItemsInput");
let OrderLineItemCreateWithoutOrderInput = class OrderLineItemCreateWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutOrderInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutOrderLineItemsInput_1.PriceCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutOrderLineItemsInput_1.PriceCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutOrderInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrderLineItemsInput_1.ProductCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutOrderLineItemsInput_1.ProductCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutOrderInput.prototype, "SelectedProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateNestedOneWithoutOrderLineItemsInput_1.ColorCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorCreateNestedOneWithoutOrderLineItemsInput_1.ColorCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutOrderInput.prototype, "SelectedColor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedOneWithoutOrderLineItemsInput_1.ArtworkCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedOneWithoutOrderLineItemsInput_1.ArtworkCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutOrderInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateNestedOneWithoutOrderLineItemsInput_1.SizeCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeCreateNestedOneWithoutOrderLineItemsInput_1.SizeCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutOrderInput.prototype, "SelectedSize", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutOrderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutOrderInput.prototype, "updatedAt", void 0);
OrderLineItemCreateWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateWithoutOrderInput", {
        isAbstract: true
    })
], OrderLineItemCreateWithoutOrderInput);
exports.OrderLineItemCreateWithoutOrderInput = OrderLineItemCreateWithoutOrderInput;
