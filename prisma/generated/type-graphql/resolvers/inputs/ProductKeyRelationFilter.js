"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductKeyWhereInput_1 = require("../inputs/ProductKeyWhereInput");
let ProductKeyRelationFilter = class ProductKeyRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereInput_1.ProductKeyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereInput_1.ProductKeyWhereInput)
], ProductKeyRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyWhereInput_1.ProductKeyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyWhereInput_1.ProductKeyWhereInput)
], ProductKeyRelationFilter.prototype, "isNot", void 0);
ProductKeyRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyRelationFilter", {
        isAbstract: true
    })
], ProductKeyRelationFilter);
exports.ProductKeyRelationFilter = ProductKeyRelationFilter;
