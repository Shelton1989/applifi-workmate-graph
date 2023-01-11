"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateManyWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateManyBuyerInputEnvelope_1 = require("../inputs/BookingOrderCreateManyBuyerInputEnvelope");
const BookingOrderCreateOrConnectWithoutBuyerInput_1 = require("../inputs/BookingOrderCreateOrConnectWithoutBuyerInput");
const BookingOrderCreateWithoutBuyerInput_1 = require("../inputs/BookingOrderCreateWithoutBuyerInput");
const BookingOrderScalarWhereInput_1 = require("../inputs/BookingOrderScalarWhereInput");
const BookingOrderUpdateManyWithWhereWithoutBuyerInput_1 = require("../inputs/BookingOrderUpdateManyWithWhereWithoutBuyerInput");
const BookingOrderUpdateWithWhereUniqueWithoutBuyerInput_1 = require("../inputs/BookingOrderUpdateWithWhereUniqueWithoutBuyerInput");
const BookingOrderUpsertWithWhereUniqueWithoutBuyerInput_1 = require("../inputs/BookingOrderUpsertWithWhereUniqueWithoutBuyerInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpdateManyWithoutBuyerInput = class BookingOrderUpdateManyWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateWithoutBuyerInput_1.BookingOrderCreateWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateOrConnectWithoutBuyerInput_1.BookingOrderCreateOrConnectWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderUpsertWithWhereUniqueWithoutBuyerInput_1.BookingOrderUpsertWithWhereUniqueWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateManyBuyerInputEnvelope_1.BookingOrderCreateManyBuyerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateManyBuyerInputEnvelope_1.BookingOrderCreateManyBuyerInputEnvelope)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderUpdateWithWhereUniqueWithoutBuyerInput_1.BookingOrderUpdateWithWhereUniqueWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderUpdateManyWithWhereWithoutBuyerInput_1.BookingOrderUpdateManyWithWhereWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderScalarWhereInput_1.BookingOrderScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderUpdateManyWithoutBuyerInput.prototype, "deleteMany", void 0);
BookingOrderUpdateManyWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateManyWithoutBuyerInput", {
        isAbstract: true
    })
], BookingOrderUpdateManyWithoutBuyerInput);
exports.BookingOrderUpdateManyWithoutBuyerInput = BookingOrderUpdateManyWithoutBuyerInput;
