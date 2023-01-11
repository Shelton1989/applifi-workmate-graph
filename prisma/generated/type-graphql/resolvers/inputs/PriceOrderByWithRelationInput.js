"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemOrderByRelationAggregateInput_1 = require("../inputs/BookingOrderLineItemOrderByRelationAggregateInput");
const CurrencyOrderByWithRelationInput_1 = require("../inputs/CurrencyOrderByWithRelationInput");
const ExperienceOrderByWithRelationInput_1 = require("../inputs/ExperienceOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PriceOrderByWithRelationInput = class PriceOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyOrderByWithRelationInput_1.CurrencyOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyOrderByWithRelationInput_1.CurrencyOrderByWithRelationInput)
], PriceOrderByWithRelationInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "currencyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceOrderByWithRelationInput_1.ExperienceOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceOrderByWithRelationInput_1.ExperienceOrderByWithRelationInput)
], PriceOrderByWithRelationInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemOrderByRelationAggregateInput_1.BookingOrderLineItemOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemOrderByRelationAggregateInput_1.BookingOrderLineItemOrderByRelationAggregateInput)
], PriceOrderByWithRelationInput.prototype, "BookingLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "isBasePrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceOrderByWithRelationInput.prototype, "updatedAt", void 0);
PriceOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceOrderByWithRelationInput", {
        isAbstract: true
    })
], PriceOrderByWithRelationInput);
exports.PriceOrderByWithRelationInput = PriceOrderByWithRelationInput;
