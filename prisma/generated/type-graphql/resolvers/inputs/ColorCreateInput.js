"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateproductIdsInput_1 = require("../inputs/ColorCreateproductIdsInput");
const OrderLineItemCreateNestedManyWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedColorInput");
const ProductCreateNestedManyWithoutColorsInput_1 = require("../inputs/ProductCreateNestedManyWithoutColorsInput");
let ColorCreateInput = class ColorCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateInput.prototype, "hex", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutColorsInput_1.ProductCreateNestedManyWithoutColorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutColorsInput_1.ProductCreateNestedManyWithoutColorsInput)
], ColorCreateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateproductIdsInput_1.ColorCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateproductIdsInput_1.ColorCreateproductIdsInput)
], ColorCreateInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedColorInput_1.OrderLineItemCreateNestedManyWithoutSelectedColorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedColorInput_1.OrderLineItemCreateNestedManyWithoutSelectedColorInput)
], ColorCreateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ColorCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ColorCreateInput.prototype, "updatedAt", void 0);
ColorCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorCreateInput", {
        isAbstract: true
    })
], ColorCreateInput);
exports.ColorCreateInput = ColorCreateInput;
