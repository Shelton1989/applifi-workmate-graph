"use strict";
var PriceWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemListRelationFilter_1 = require("../inputs/BookingOrderLineItemListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const CurrencyRelationFilter_1 = require("../inputs/CurrencyRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const ExperienceRelationFilter_1 = require("../inputs/ExperienceRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let PriceWhereInput = PriceWhereInput_1 = class PriceWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PriceWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PriceWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriceWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], PriceWhereInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriceWhereInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyRelationFilter_1.CurrencyRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyRelationFilter_1.CurrencyRelationFilter)
], PriceWhereInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriceWhereInput.prototype, "currencyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriceWhereInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceRelationFilter_1.ExperienceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceRelationFilter_1.ExperienceRelationFilter)
], PriceWhereInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PriceWhereInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemListRelationFilter_1.BookingOrderLineItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemListRelationFilter_1.BookingOrderLineItemListRelationFilter)
], PriceWhereInput.prototype, "BookingLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], PriceWhereInput.prototype, "isBasePrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PriceWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PriceWhereInput.prototype, "updatedAt", void 0);
PriceWhereInput = PriceWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceWhereInput", {
        isAbstract: true
    })
], PriceWhereInput);
exports.PriceWhereInput = PriceWhereInput;
