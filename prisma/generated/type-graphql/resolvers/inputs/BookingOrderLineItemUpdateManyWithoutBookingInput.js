"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpdateManyWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateManyBookingInputEnvelope_1 = require("../inputs/BookingOrderLineItemCreateManyBookingInputEnvelope");
const BookingOrderLineItemCreateOrConnectWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemCreateOrConnectWithoutBookingInput");
const BookingOrderLineItemCreateWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemCreateWithoutBookingInput");
const BookingOrderLineItemScalarWhereInput_1 = require("../inputs/BookingOrderLineItemScalarWhereInput");
const BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput");
const BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput");
const BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../inputs/BookingOrderLineItemWhereUniqueInput");
let BookingOrderLineItemUpdateManyWithoutBookingInput = class BookingOrderLineItemUpdateManyWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateWithoutBookingInput_1.BookingOrderLineItemCreateWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateOrConnectWithoutBookingInput_1.BookingOrderLineItemCreateOrConnectWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput_1.BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateManyBookingInputEnvelope_1.BookingOrderLineItemCreateManyBookingInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateManyBookingInputEnvelope_1.BookingOrderLineItemCreateManyBookingInputEnvelope)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput_1.BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput_1.BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemScalarWhereInput_1.BookingOrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutBookingInput.prototype, "deleteMany", void 0);
BookingOrderLineItemUpdateManyWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpdateManyWithoutBookingInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpdateManyWithoutBookingInput);
exports.BookingOrderLineItemUpdateManyWithoutBookingInput = BookingOrderLineItemUpdateManyWithoutBookingInput;
