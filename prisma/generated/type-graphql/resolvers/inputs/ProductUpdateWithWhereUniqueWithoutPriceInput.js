"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutPriceInput_1 = require("../inputs/ProductUpdateWithoutPriceInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutPriceInput = class ProductUpdateWithWhereUniqueWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutPriceInput_1.ProductUpdateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutPriceInput_1.ProductUpdateWithoutPriceInput)
], ProductUpdateWithWhereUniqueWithoutPriceInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutPriceInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutPriceInput);
exports.ProductUpdateWithWhereUniqueWithoutPriceInput = ProductUpdateWithWhereUniqueWithoutPriceInput;
