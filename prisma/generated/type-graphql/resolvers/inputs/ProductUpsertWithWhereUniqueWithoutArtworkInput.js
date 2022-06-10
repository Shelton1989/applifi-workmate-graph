"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutArtworkInput_1 = require("../inputs/ProductCreateWithoutArtworkInput");
const ProductUpdateWithoutArtworkInput_1 = require("../inputs/ProductUpdateWithoutArtworkInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutArtworkInput = class ProductUpsertWithWhereUniqueWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutArtworkInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutArtworkInput_1.ProductUpdateWithoutArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutArtworkInput_1.ProductUpdateWithoutArtworkInput)
], ProductUpsertWithWhereUniqueWithoutArtworkInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutArtworkInput_1.ProductCreateWithoutArtworkInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutArtworkInput_1.ProductCreateWithoutArtworkInput)
], ProductUpsertWithWhereUniqueWithoutArtworkInput.prototype, "create", void 0);
ProductUpsertWithWhereUniqueWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutArtworkInput", {
        isAbstract: true
    })
], ProductUpsertWithWhereUniqueWithoutArtworkInput);
exports.ProductUpsertWithWhereUniqueWithoutArtworkInput = ProductUpsertWithWhereUniqueWithoutArtworkInput;
