"use strict";
var CurrencyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const PriceListRelationFilter_1 = require("../inputs/PriceListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CurrencyWhereInput = CurrencyWhereInput_1 = class CurrencyWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrencyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrencyWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrencyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrencyWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrencyWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CurrencyWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CurrencyWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CurrencyWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CurrencyWhereInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CurrencyWhereInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceListRelationFilter_1.PriceListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceListRelationFilter_1.PriceListRelationFilter)
], CurrencyWhereInput.prototype, "prices", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CurrencyWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CurrencyWhereInput.prototype, "updatedAt", void 0);
CurrencyWhereInput = CurrencyWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CurrencyWhereInput", {
        isAbstract: true
    })
], CurrencyWhereInput);
exports.CurrencyWhereInput = CurrencyWhereInput;
