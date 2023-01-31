"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateManyBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookingOrderLineItemCreateManyBookingInput = class BookingOrderLineItemCreateManyBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyBookingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyBookingInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyBookingInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BookingOrderLineItemCreateManyBookingInput.prototype, "selectedQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateManyBookingInput.prototype, "selectedStartDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateManyBookingInput.prototype, "selectedEndDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateManyBookingInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateManyBookingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateManyBookingInput.prototype, "updatedAt", void 0);
BookingOrderLineItemCreateManyBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateManyBookingInput", {
        isAbstract: true
    })
], BookingOrderLineItemCreateManyBookingInput);
exports.BookingOrderLineItemCreateManyBookingInput = BookingOrderLineItemCreateManyBookingInput;
