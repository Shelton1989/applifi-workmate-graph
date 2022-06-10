"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutPriceInput_1 = require("../inputs/ProductCreateWithoutPriceInput");
const ProductUpdateWithoutPriceInput_1 = require("../inputs/ProductUpdateWithoutPriceInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutPriceInput = class ProductUpsertWithWhereUniqueWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutPriceInput_1.ProductUpdateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutPriceInput_1.ProductUpdateWithoutPriceInput)
], ProductUpsertWithWhereUniqueWithoutPriceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutPriceInput_1.ProductCreateWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutPriceInput_1.ProductCreateWithoutPriceInput)
], ProductUpsertWithWhereUniqueWithoutPriceInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutPriceInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutPriceInput);
exports.ProductUpsertWithWhereUniqueWithoutPriceInput = ProductUpsertWithWhereUniqueWithoutPriceInput;
