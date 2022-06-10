"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutLikedByInput_1 = require("../inputs/ProductCreateWithoutLikedByInput");
const ProductUpdateWithoutLikedByInput_1 = require("../inputs/ProductUpdateWithoutLikedByInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutLikedByInput = class ProductUpsertWithWhereUniqueWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutLikedByInput_1.ProductUpdateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutLikedByInput_1.ProductUpdateWithoutLikedByInput)
], ProductUpsertWithWhereUniqueWithoutLikedByInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutLikedByInput_1.ProductCreateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutLikedByInput_1.ProductCreateWithoutLikedByInput)
], ProductUpsertWithWhereUniqueWithoutLikedByInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutLikedByInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutLikedByInput);
exports.ProductUpsertWithWhereUniqueWithoutLikedByInput = ProductUpsertWithWhereUniqueWithoutLikedByInput;
