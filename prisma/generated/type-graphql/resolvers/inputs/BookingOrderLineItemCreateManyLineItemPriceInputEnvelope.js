"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateManyLineItemPriceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateManyLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemCreateManyLineItemPriceInput");
let BookingOrderLineItemCreateManyLineItemPriceInputEnvelope = class BookingOrderLineItemCreateManyLineItemPriceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateManyLineItemPriceInput_1.BookingOrderLineItemCreateManyLineItemPriceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemCreateManyLineItemPriceInputEnvelope.prototype, "data", void 0);
BookingOrderLineItemCreateManyLineItemPriceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateManyLineItemPriceInputEnvelope", {
        isAbstract: true
    })
], BookingOrderLineItemCreateManyLineItemPriceInputEnvelope);
exports.BookingOrderLineItemCreateManyLineItemPriceInputEnvelope = BookingOrderLineItemCreateManyLineItemPriceInputEnvelope;
