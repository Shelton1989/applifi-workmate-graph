"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateproductIdsInput_1 = require("../inputs/ColorCreateproductIdsInput");
const OrderLineItemCreateNestedManyWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedColorInput");
let ColorCreateWithoutProductsInput = class ColorCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateWithoutProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateWithoutProductsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateWithoutProductsInput.prototype, "hex", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateproductIdsInput_1.ColorCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateproductIdsInput_1.ColorCreateproductIdsInput)
], ColorCreateWithoutProductsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedColorInput_1.OrderLineItemCreateNestedManyWithoutSelectedColorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedColorInput_1.OrderLineItemCreateNestedManyWithoutSelectedColorInput)
], ColorCreateWithoutProductsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ColorCreateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ColorCreateWithoutProductsInput.prototype, "updatedAt", void 0);
ColorCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorCreateWithoutProductsInput", {
        isAbstract: true
    })
], ColorCreateWithoutProductsInput);
exports.ColorCreateWithoutProductsInput = ColorCreateWithoutProductsInput;
