"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutBaseProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutBaseProductInput_1 = require("../inputs/ProductCreateWithoutBaseProductInput");
const ProductUpdateWithoutBaseProductInput_1 = require("../inputs/ProductUpdateWithoutBaseProductInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutBaseProductInput = class ProductUpsertWithWhereUniqueWithoutBaseProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutBaseProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutBaseProductInput_1.ProductUpdateWithoutBaseProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutBaseProductInput_1.ProductUpdateWithoutBaseProductInput)
], ProductUpsertWithWhereUniqueWithoutBaseProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutBaseProductInput_1.ProductCreateWithoutBaseProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutBaseProductInput_1.ProductCreateWithoutBaseProductInput)
], ProductUpsertWithWhereUniqueWithoutBaseProductInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutBaseProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutBaseProductInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutBaseProductInput);
exports.ProductUpsertWithWhereUniqueWithoutBaseProductInput = ProductUpsertWithWhereUniqueWithoutBaseProductInput;
