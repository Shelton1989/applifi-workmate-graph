"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateWithoutSelectedProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateNestedOneWithoutOrderLineItemsInput");
const ColorCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ColorCreateNestedOneWithoutOrderLineItemsInput");
const OrderCreateNestedOneWithoutItemsInput_1 = require("../inputs/OrderCreateNestedOneWithoutItemsInput");
const PriceCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/PriceCreateNestedOneWithoutOrderLineItemsInput");
const SizeCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/SizeCreateNestedOneWithoutOrderLineItemsInput");
let OrderLineItemCreateWithoutSelectedProductInput = class OrderLineItemCreateWithoutSelectedProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutSelectedProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutOrderLineItemsInput_1.PriceCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutOrderLineItemsInput_1.PriceCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedProductInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateNestedOneWithoutOrderLineItemsInput_1.ColorCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ColorCreateNestedOneWithoutOrderLineItemsInput_1.ColorCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedProductInput.prototype, "SelectedColor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedOneWithoutOrderLineItemsInput_1.ArtworkCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedOneWithoutOrderLineItemsInput_1.ArtworkCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedProductInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateNestedOneWithoutOrderLineItemsInput_1.SizeCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeCreateNestedOneWithoutOrderLineItemsInput_1.SizeCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedProductInput.prototype, "SelectedSize", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput)
], OrderLineItemCreateWithoutSelectedProductInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutSelectedProductInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutSelectedProductInput.prototype, "updatedAt", void 0);
OrderLineItemCreateWithoutSelectedProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateWithoutSelectedProductInput", {
        isAbstract: true
    })
], OrderLineItemCreateWithoutSelectedProductInput);
exports.OrderLineItemCreateWithoutSelectedProductInput = OrderLineItemCreateWithoutSelectedProductInput;
