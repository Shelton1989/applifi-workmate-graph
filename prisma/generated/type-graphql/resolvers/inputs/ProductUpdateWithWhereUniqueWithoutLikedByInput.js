"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutLikedByInput_1 = require("../inputs/ProductUpdateWithoutLikedByInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutLikedByInput = class ProductUpdateWithWhereUniqueWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutLikedByInput_1.ProductUpdateWithoutLikedByInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutLikedByInput_1.ProductUpdateWithoutLikedByInput)
], ProductUpdateWithWhereUniqueWithoutLikedByInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutLikedByInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutLikedByInput);
exports.ProductUpdateWithWhereUniqueWithoutLikedByInput = ProductUpdateWithWhereUniqueWithoutLikedByInput;
