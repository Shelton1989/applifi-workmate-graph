"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateNestedOneWithoutItemsInput_1 = require("../inputs/BookingOrderCreateNestedOneWithoutItemsInput");
let BookingOrderLineItemCreateWithoutLineItemPriceInput = class BookingOrderLineItemCreateWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateWithoutLineItemPriceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateNestedOneWithoutItemsInput_1.BookingOrderCreateNestedOneWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateNestedOneWithoutItemsInput_1.BookingOrderCreateNestedOneWithoutItemsInput)
], BookingOrderLineItemCreateWithoutLineItemPriceInput.prototype, "Booking", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateWithoutLineItemPriceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateWithoutLineItemPriceInput.prototype, "updatedAt", void 0);
BookingOrderLineItemCreateWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateWithoutLineItemPriceInput", {
        isAbstract: true
    })
], BookingOrderLineItemCreateWithoutLineItemPriceInput);
exports.BookingOrderLineItemCreateWithoutLineItemPriceInput = BookingOrderLineItemCreateWithoutLineItemPriceInput;
