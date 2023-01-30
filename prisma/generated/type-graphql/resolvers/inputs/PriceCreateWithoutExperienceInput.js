"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput");
const CurrencyCreateNestedOneWithoutPricesInput_1 = require("../inputs/CurrencyCreateNestedOneWithoutPricesInput");
let PriceCreateWithoutExperienceInput = class PriceCreateWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutExperienceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceCreateWithoutExperienceInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutExperienceInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput)
], PriceCreateWithoutExperienceInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateWithoutExperienceInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput)
], PriceCreateWithoutExperienceInput.prototype, "BookingLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PriceCreateWithoutExperienceInput.prototype, "isBasePrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutExperienceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateWithoutExperienceInput.prototype, "updatedAt", void 0);
PriceCreateWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateWithoutExperienceInput", {
        isAbstract: true
    })
], PriceCreateWithoutExperienceInput);
exports.PriceCreateWithoutExperienceInput = PriceCreateWithoutExperienceInput;
