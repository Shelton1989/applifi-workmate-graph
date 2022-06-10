"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutColorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutColorsInput_1 = require("../inputs/ProductUpdateWithoutColorsInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutColorsInput = class ProductUpdateWithWhereUniqueWithoutColorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutColorsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutColorsInput_1.ProductUpdateWithoutColorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutColorsInput_1.ProductUpdateWithoutColorsInput)
], ProductUpdateWithWhereUniqueWithoutColorsInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutColorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutColorsInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutColorsInput);
exports.ProductUpdateWithWhereUniqueWithoutColorsInput = ProductUpdateWithWhereUniqueWithoutColorsInput;
