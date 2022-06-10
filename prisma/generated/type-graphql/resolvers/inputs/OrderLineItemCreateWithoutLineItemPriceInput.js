"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateNestedOneWithoutOrderLineItemsInput");
const ColorCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ColorCreateNestedOneWithoutOrderLineItemsInput");
const OrderCreateNestedOneWithoutItemsInput_1 = require("../inputs/OrderCreateNestedOneWithoutItemsInput");
const ProductCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ProductCreateNestedOneWithoutOrderLineItemsInput");
const SizeCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/SizeCreateNestedOneWithoutOrderLineItemsInput");
let OrderLineItemCreateWithoutLineItemPriceInput = class OrderLineItemCreateWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutLineItemPriceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrderLineItemsInput_1.ProductCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutOrderLineItemsInput_1.ProductCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutLineItemPriceInput.prototype, "SelectedProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateNestedOneWithoutOrderLineItemsInput_1.ColorCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorCreateNestedOneWithoutOrderLineItemsInput_1.ColorCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutLineItemPriceInput.prototype, "SelectedColor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedOneWithoutOrderLineItemsInput_1.ArtworkCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedOneWithoutOrderLineItemsInput_1.ArtworkCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutLineItemPriceInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateNestedOneWithoutOrderLineItemsInput_1.SizeCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeCreateNestedOneWithoutOrderLineItemsInput_1.SizeCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutLineItemPriceInput.prototype, "SelectedSize", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput)
], OrderLineItemCreateWithoutLineItemPriceInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutLineItemPriceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutLineItemPriceInput.prototype, "updatedAt", void 0);
OrderLineItemCreateWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateWithoutLineItemPriceInput", {
        isAbstract: true
    })
], OrderLineItemCreateWithoutLineItemPriceInput);
exports.OrderLineItemCreateWithoutLineItemPriceInput = OrderLineItemCreateWithoutLineItemPriceInput;
