"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductOrderByWithRelationInput_1 = require("../../../inputs/ProductOrderByWithRelationInput");
const ProductWhereInput_1 = require("../../../inputs/ProductWhereInput");
const ProductWhereUniqueInput_1 = require("../../../inputs/ProductWhereUniqueInput");
const ProductScalarFieldEnum_1 = require("../../../../enums/ProductScalarFieldEnum");
let ArtworkProductsArgs = class ArtworkProductsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ArtworkProductsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkProductsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ArtworkProductsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ArtworkProductsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ArtworkProductsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarFieldEnum_1.ProductScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkProductsArgs.prototype, "distinct", void 0);
ArtworkProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ArtworkProductsArgs);
exports.ArtworkProductsArgs = ArtworkProductsArgs;
