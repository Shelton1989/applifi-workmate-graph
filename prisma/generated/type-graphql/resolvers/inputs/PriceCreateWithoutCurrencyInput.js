"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateWithoutCurrencyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput");
const ExperienceCreateNestedOneWithoutPriceInput_1 = require("../inputs/ExperienceCreateNestedOneWithoutPriceInput");
let PriceCreateWithoutCurrencyInput = class PriceCreateWithoutCurrencyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutCurrencyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceCreateWithoutCurrencyInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutCurrencyInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutCurrencyInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedOneWithoutPriceInput_1.ExperienceCreateNestedOneWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedOneWithoutPriceInput_1.ExperienceCreateNestedOneWithoutPriceInput)
], PriceCreateWithoutCurrencyInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput)
], PriceCreateWithoutCurrencyInput.prototype, "BookingLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PriceCreateWithoutCurrencyInput.prototype, "isBasePrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutCurrencyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutCurrencyInput.prototype, "updatedAt", void 0);
PriceCreateWithoutCurrencyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateWithoutCurrencyInput", {
        isAbstract: true
    })
], PriceCreateWithoutCurrencyInput);
exports.PriceCreateWithoutCurrencyInput = PriceCreateWithoutCurrencyInput;
