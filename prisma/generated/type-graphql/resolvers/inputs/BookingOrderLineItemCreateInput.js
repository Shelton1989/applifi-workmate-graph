"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateNestedOneWithoutItemsInput_1 = require("../inputs/BookingOrderCreateNestedOneWithoutItemsInput");
const PriceCreateNestedOneWithoutBookingLineItemsInput_1 = require("../inputs/PriceCreateNestedOneWithoutBookingLineItemsInput");
let BookingOrderLineItemCreateInput = class BookingOrderLineItemCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BookingOrderLineItemCreateInput.prototype, "selectedQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateInput.prototype, "selectedStartDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateInput.prototype, "selectedEndDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutBookingLineItemsInput_1.PriceCreateNestedOneWithoutBookingLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutBookingLineItemsInput_1.PriceCreateNestedOneWithoutBookingLineItemsInput)
], BookingOrderLineItemCreateInput.prototype, "LineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateNestedOneWithoutItemsInput_1.BookingOrderCreateNestedOneWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateNestedOneWithoutItemsInput_1.BookingOrderCreateNestedOneWithoutItemsInput)
], BookingOrderLineItemCreateInput.prototype, "Booking", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateInput.prototype, "updatedAt", void 0);
BookingOrderLineItemCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateInput", {
        isAbstract: true
    })
], BookingOrderLineItemCreateInput);
exports.BookingOrderLineItemCreateInput = BookingOrderLineItemCreateInput;
