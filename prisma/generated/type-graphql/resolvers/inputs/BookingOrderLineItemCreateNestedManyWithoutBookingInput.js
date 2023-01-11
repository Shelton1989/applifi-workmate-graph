"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateNestedManyWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateManyBookingInputEnvelope_1 = require("../inputs/BookingOrderLineItemCreateManyBookingInputEnvelope");
const BookingOrderLineItemCreateOrConnectWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemCreateOrConnectWithoutBookingInput");
const BookingOrderLineItemCreateWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemCreateWithoutBookingInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../inputs/BookingOrderLineItemWhereUniqueInput");
let BookingOrderLineItemCreateNestedManyWithoutBookingInput = class BookingOrderLineItemCreateNestedManyWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateWithoutBookingInput_1.BookingOrderLineItemCreateWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemCreateNestedManyWithoutBookingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateOrConnectWithoutBookingInput_1.BookingOrderLineItemCreateOrConnectWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemCreateNestedManyWithoutBookingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateManyBookingInputEnvelope_1.BookingOrderLineItemCreateManyBookingInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateManyBookingInputEnvelope_1.BookingOrderLineItemCreateManyBookingInputEnvelope)
], BookingOrderLineItemCreateNestedManyWithoutBookingInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemCreateNestedManyWithoutBookingInput.prototype, "connect", void 0);
BookingOrderLineItemCreateNestedManyWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateNestedManyWithoutBookingInput", {
        isAbstract: true
    })
], BookingOrderLineItemCreateNestedManyWithoutBookingInput);
exports.BookingOrderLineItemCreateNestedManyWithoutBookingInput = BookingOrderLineItemCreateNestedManyWithoutBookingInput;
