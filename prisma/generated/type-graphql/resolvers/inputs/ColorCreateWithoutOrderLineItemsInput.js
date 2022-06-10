"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCreateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorCreateproductIdsInput_1 = require("../inputs/ColorCreateproductIdsInput");
const ProductCreateNestedManyWithoutColorsInput_1 = require("../inputs/ProductCreateNestedManyWithoutColorsInput");
let ColorCreateWithoutOrderLineItemsInput = class ColorCreateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateWithoutOrderLineItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateWithoutOrderLineItemsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ColorCreateWithoutOrderLineItemsInput.prototype, "hex", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutColorsInput_1.ProductCreateNestedManyWithoutColorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutColorsInput_1.ProductCreateNestedManyWithoutColorsInput)
], ColorCreateWithoutOrderLineItemsInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateproductIdsInput_1.ColorCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateproductIdsInput_1.ColorCreateproductIdsInput)
], ColorCreateWithoutOrderLineItemsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ColorCreateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ColorCreateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
ColorCreateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorCreateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ColorCreateWithoutOrderLineItemsInput);
exports.ColorCreateWithoutOrderLineItemsInput = ColorCreateWithoutOrderLineItemsInput;
