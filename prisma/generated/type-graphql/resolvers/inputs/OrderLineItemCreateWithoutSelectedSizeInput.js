"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateWithoutSelectedSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateNestedOneWithoutOrderLineItemsInput");
const ColorCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ColorCreateNestedOneWithoutOrderLineItemsInput");
const OrderCreateNestedOneWithoutItemsInput_1 = require("../inputs/OrderCreateNestedOneWithoutItemsInput");
const PriceCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/PriceCreateNestedOneWithoutOrderLineItemsInput");
const ProductCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ProductCreateNestedOneWithoutOrderLineItemsInput");
let OrderLineItemCreateWithoutSelectedSizeInput = class OrderLineItemCreateWithoutSelectedSizeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutSelectedSizeInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutOrderLineItemsInput_1.PriceCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutOrderLineItemsInput_1.PriceCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedSizeInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrderLineItemsInput_1.ProductCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutOrderLineItemsInput_1.ProductCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedSizeInput.prototype, "SelectedProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateNestedOneWithoutOrderLineItemsInput_1.ColorCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorCreateNestedOneWithoutOrderLineItemsInput_1.ColorCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedSizeInput.prototype, "SelectedColor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedOneWithoutOrderLineItemsInput_1.ArtworkCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedOneWithoutOrderLineItemsInput_1.ArtworkCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedSizeInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput)
], OrderLineItemCreateWithoutSelectedSizeInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutSelectedSizeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutSelectedSizeInput.prototype, "updatedAt", void 0);
OrderLineItemCreateWithoutSelectedSizeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateWithoutSelectedSizeInput", {
        isAbstract: true
    })
], OrderLineItemCreateWithoutSelectedSizeInput);
exports.OrderLineItemCreateWithoutSelectedSizeInput = OrderLineItemCreateWithoutSelectedSizeInput;
