"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemCreateWithoutLineItemPriceInput");
const BookingOrderLineItemUpdateWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemUpdateWithoutLineItemPriceInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../inputs/BookingOrderLineItemWhereUniqueInput");
let BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput = class BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateWithoutLineItemPriceInput_1.BookingOrderLineItemUpdateWithoutLineItemPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateWithoutLineItemPriceInput_1.BookingOrderLineItemUpdateWithoutLineItemPriceInput)
], BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateWithoutLineItemPriceInput_1.BookingOrderLineItemCreateWithoutLineItemPriceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateWithoutLineItemPriceInput_1.BookingOrderLineItemCreateWithoutLineItemPriceInput)
], BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput.prototype, "create", void 0);
BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput);
exports.BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput = BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput;
