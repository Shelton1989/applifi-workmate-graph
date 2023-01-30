"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput");
const CurrencyCreateNestedOneWithoutPricesInput_1 = require("../inputs/CurrencyCreateNestedOneWithoutPricesInput");
const ExperienceCreateNestedOneWithoutPriceInput_1 = require("../inputs/ExperienceCreateNestedOneWithoutPriceInput");
let PriceCreateInput = class PriceCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PriceCreateInput.prototype, "priceInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateInput.prototype, "displayPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyCreateNestedOneWithoutPricesInput_1.CurrencyCreateNestedOneWithoutPricesInput)
], PriceCreateInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PriceCreateInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedOneWithoutPriceInput_1.ExperienceCreateNestedOneWithoutPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedOneWithoutPriceInput_1.ExperienceCreateNestedOneWithoutPriceInput)
], PriceCreateInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput_1.BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput)
], PriceCreateInput.prototype, "BookingLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PriceCreateInput.prototype, "isBasePrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PriceCreateInput.prototype, "updatedAt", void 0);
PriceCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PriceCreateInput", {
        isAbstract: true
    })
], PriceCreateInput);
exports.PriceCreateInput = PriceCreateInput;
