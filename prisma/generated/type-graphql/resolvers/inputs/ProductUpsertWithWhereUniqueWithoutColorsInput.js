"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutColorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutColorsInput_1 = require("../inputs/ProductCreateWithoutColorsInput");
const ProductUpdateWithoutColorsInput_1 = require("../inputs/ProductUpdateWithoutColorsInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutColorsInput = class ProductUpsertWithWhereUniqueWithoutColorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutColorsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutColorsInput_1.ProductUpdateWithoutColorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutColorsInput_1.ProductUpdateWithoutColorsInput)
], ProductUpsertWithWhereUniqueWithoutColorsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutColorsInput_1.ProductCreateWithoutColorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutColorsInput_1.ProductCreateWithoutColorsInput)
], ProductUpsertWithWhereUniqueWithoutColorsInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutColorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutColorsInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutColorsInput);
exports.ProductUpsertWithWhereUniqueWithoutColorsInput = ProductUpsertWithWhereUniqueWithoutColorsInput;
