"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutSizesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutSizesInput_1 = require("../inputs/ProductCreateWithoutSizesInput");
const ProductUpdateWithoutSizesInput_1 = require("../inputs/ProductUpdateWithoutSizesInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutSizesInput = class ProductUpsertWithWhereUniqueWithoutSizesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutSizesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutSizesInput_1.ProductUpdateWithoutSizesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutSizesInput_1.ProductUpdateWithoutSizesInput)
], ProductUpsertWithWhereUniqueWithoutSizesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutSizesInput_1.ProductCreateWithoutSizesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutSizesInput_1.ProductCreateWithoutSizesInput)
], ProductUpsertWithWhereUniqueWithoutSizesInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutSizesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutSizesInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutSizesInput);
exports.ProductUpsertWithWhereUniqueWithoutSizesInput = ProductUpsertWithWhereUniqueWithoutSizesInput;
