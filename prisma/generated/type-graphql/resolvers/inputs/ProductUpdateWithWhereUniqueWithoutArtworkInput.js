"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutArtworkInput_1 = require("../inputs/ProductUpdateWithoutArtworkInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutArtworkInput = class ProductUpdateWithWhereUniqueWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutArtworkInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutArtworkInput_1.ProductUpdateWithoutArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutArtworkInput_1.ProductUpdateWithoutArtworkInput)
], ProductUpdateWithWhereUniqueWithoutArtworkInput.prototype, "data", void 0);
ProductUpdateWithWhereUniqueWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutArtworkInput", {
        isAbstract: true
    })
], ProductUpdateWithWhereUniqueWithoutArtworkInput);
exports.ProductUpdateWithWhereUniqueWithoutArtworkInput = ProductUpdateWithWhereUniqueWithoutArtworkInput;
