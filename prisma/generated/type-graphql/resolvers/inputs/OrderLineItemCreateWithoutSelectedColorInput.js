"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateWithoutSelectedColorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ArtworkCreateNestedOneWithoutOrderLineItemsInput");
const OrderCreateNestedOneWithoutItemsInput_1 = require("../inputs/OrderCreateNestedOneWithoutItemsInput");
const PriceCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/PriceCreateNestedOneWithoutOrderLineItemsInput");
const ProductCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/ProductCreateNestedOneWithoutOrderLineItemsInput");
const SizeCreateNestedOneWithoutOrderLineItemsInput_1 = require("../inputs/SizeCreateNestedOneWithoutOrderLineItemsInput");
let OrderLineItemCreateWithoutSelectedColorInput = class OrderLineItemCreateWithoutSelectedColorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemCreateWithoutSelectedColorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutOrderLineItemsInput_1.PriceCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutOrderLineItemsInput_1.PriceCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedColorInput.prototype, "lineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrderLineItemsInput_1.ProductCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutOrderLineItemsInput_1.ProductCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedColorInput.prototype, "SelectedProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedOneWithoutOrderLineItemsInput_1.ArtworkCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedOneWithoutOrderLineItemsInput_1.ArtworkCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedColorInput.prototype, "SelectedArtwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateNestedOneWithoutOrderLineItemsInput_1.SizeCreateNestedOneWithoutOrderLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SizeCreateNestedOneWithoutOrderLineItemsInput_1.SizeCreateNestedOneWithoutOrderLineItemsInput)
], OrderLineItemCreateWithoutSelectedColorInput.prototype, "SelectedSize", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutItemsInput_1.OrderCreateNestedOneWithoutItemsInput)
], OrderLineItemCreateWithoutSelectedColorInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutSelectedColorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderLineItemCreateWithoutSelectedColorInput.prototype, "updatedAt", void 0);
OrderLineItemCreateWithoutSelectedColorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateWithoutSelectedColorInput", {
        isAbstract: true
    })
], OrderLineItemCreateWithoutSelectedColorInput);
exports.OrderLineItemCreateWithoutSelectedColorInput = OrderLineItemCreateWithoutSelectedColorInput;
