"use strict";
var SizeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSIZE_REGIONFilter_1 = require("../inputs/EnumSIZE_REGIONFilter");
const OrderLineItemListRelationFilter_1 = require("../inputs/OrderLineItemListRelationFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
let SizeWhereInput = SizeWhereInput_1 = class SizeWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SizeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SizeWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SizeWhereInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSIZE_REGIONFilter_1.EnumSIZE_REGIONFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSIZE_REGIONFilter_1.EnumSIZE_REGIONFilter)
], SizeWhereInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], SizeWhereInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], SizeWhereInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter)
], SizeWhereInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SizeWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SizeWhereInput.prototype, "updatedAt", void 0);
SizeWhereInput = SizeWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeWhereInput", {
        isAbstract: true
    })
], SizeWhereInput);
exports.SizeWhereInput = SizeWhereInput;
