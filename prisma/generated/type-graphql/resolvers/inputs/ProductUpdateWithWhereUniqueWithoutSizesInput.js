"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutSizesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutSizesInput_1 = require("../inputs/ProductUpdateWithoutSizesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutSizesInput = class ProductUpdateWithWhereUniqueWithoutSizesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutSizesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutSizesInput_1.ProductUpdateWithoutSizesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutSizesInput_1.ProductUpdateWithoutSizesInput)
], ProductUpdateWithWhereUniqueWithoutSizesInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutSizesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutSizesInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutSizesInput);
exports.ProductUpdateWithWhereUniqueWithoutSizesInput = ProductUpdateWithWhereUniqueWithoutSizesInput;
