"use strict";
var ProductKeyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingRelationFilter_1 = require("../inputs/BillingRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ProductKeyWhereInput = ProductKeyWhereInput_1 = class ProductKeyWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductKeyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductKeyWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductKeyWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingRelationFilter_1.BillingRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingRelationFilter_1.BillingRelationFilter)
], ProductKeyWhereInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductKeyWhereInput.prototype, "billingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductKeyWhereInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductKeyWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductKeyWhereInput.prototype, "updatedAt", void 0);
ProductKeyWhereInput = ProductKeyWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyWhereInput", {
        isAbstract: true
    })
], ProductKeyWhereInput);
exports.ProductKeyWhereInput = ProductKeyWhereInput;
