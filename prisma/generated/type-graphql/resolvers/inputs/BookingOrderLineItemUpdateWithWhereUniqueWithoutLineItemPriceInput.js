"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemUpdateWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemUpdateWithoutLineItemPriceInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../inputs/BookingOrderLineItemWhereUniqueInput");
let BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput = class BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateWithoutLineItemPriceInput_1.BookingOrderLineItemUpdateWithoutLineItemPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateWithoutLineItemPriceInput_1.BookingOrderLineItemUpdateWithoutLineItemPriceInput)
], BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput.prototype, "data", void 0);
BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput);
exports.BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput = BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput;
