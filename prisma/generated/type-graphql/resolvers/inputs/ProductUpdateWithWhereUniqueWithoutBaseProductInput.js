"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutBaseProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutBaseProductInput_1 = require("../inputs/ProductUpdateWithoutBaseProductInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutBaseProductInput = class ProductUpdateWithWhereUniqueWithoutBaseProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutBaseProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutBaseProductInput_1.ProductUpdateWithoutBaseProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutBaseProductInput_1.ProductUpdateWithoutBaseProductInput)
], ProductUpdateWithWhereUniqueWithoutBaseProductInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutBaseProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutBaseProductInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutBaseProductInput);
exports.ProductUpdateWithWhereUniqueWithoutBaseProductInput = ProductUpdateWithWhereUniqueWithoutBaseProductInput;
