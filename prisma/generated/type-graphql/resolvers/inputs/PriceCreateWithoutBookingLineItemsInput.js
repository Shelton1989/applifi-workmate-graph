"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateWithoutBookingLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrencyCreateNestedOneWithoutPricesInput_1 = require("../inputs/CurrencyCreateNestedOneWithoutPricesInput");
const ExperienceCreateNestedOneWithoutPriceInput_1 = require("../inputs/ExperienceCreateNestedOneWithoutPriceInput");
let PriceCreateWithoutBookingLineItemsInput = class PriceCreateWithoutBookingLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutBookingLineItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceCreateWithoutBookingLineItemsInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutBookingLineItemsInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput)
], PriceCreateWithoutBookingLineItemsInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutBookingLineItemsInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedOneWithoutPriceInput_1.ExperienceCreateNestedOneWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedOneWithoutPriceInput_1.ExperienceCreateNestedOneWithoutPriceInput)
], PriceCreateWithoutBookingLineItemsInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PriceCreateWithoutBookingLineItemsInput.prototype, "isBasePrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutBookingLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutBookingLineItemsInput.prototype, "updatedAt", void 0);
PriceCreateWithoutBookingLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateWithoutBookingLineItemsInput", {
        isAbstract: true
    })
], PriceCreateWithoutBookingLineItemsInput);
exports.PriceCreateWithoutBookingLineItemsInput = PriceCreateWithoutBookingLineItemsInput;
