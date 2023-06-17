"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyWhereInput_1 = require("../inputs/ProductKeyWhereInput");
let ProductKeyListRelationFilter = class ProductKeyListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereInput_1.ProductKeyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereInput_1.ProductKeyWhereInput)
], ProductKeyListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereInput_1.ProductKeyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereInput_1.ProductKeyWhereInput)
], ProductKeyListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereInput_1.ProductKeyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereInput_1.ProductKeyWhereInput)
], ProductKeyListRelationFilter.prototype, "none", void 0);
ProductKeyListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyListRelationFilter", {
        isAbstract: true
    })
], ProductKeyListRelationFilter);
exports.ProductKeyListRelationFilter = ProductKeyListRelationFilter;
