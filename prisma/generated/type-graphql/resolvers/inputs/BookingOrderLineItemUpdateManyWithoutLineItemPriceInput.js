"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpdateManyWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateManyLineItemPriceInputEnvelope_1 = require("../inputs/BookingOrderLineItemCreateManyLineItemPriceInputEnvelope");
const BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput");
const BookingOrderLineItemCreateWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemCreateWithoutLineItemPriceInput");
const BookingOrderLineItemScalarWhereInput_1 = require("../inputs/BookingOrderLineItemScalarWhereInput");
const BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput");
const BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput");
const BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput_1 = require("../inputs/BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../inputs/BookingOrderLineItemWhereUniqueInput");
let BookingOrderLineItemUpdateManyWithoutLineItemPriceInput = class BookingOrderLineItemUpdateManyWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateWithoutLineItemPriceInput_1.BookingOrderLineItemCreateWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput_1.BookingOrderLineItemCreateOrConnectWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput_1.BookingOrderLineItemUpsertWithWhereUniqueWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateManyLineItemPriceInputEnvelope_1.BookingOrderLineItemCreateManyLineItemPriceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateManyLineItemPriceInputEnvelope_1.BookingOrderLineItemCreateManyLineItemPriceInputEnvelope)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput_1.BookingOrderLineItemUpdateWithWhereUniqueWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput_1.BookingOrderLineItemUpdateManyWithWhereWithoutLineItemPriceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemScalarWhereInput_1.BookingOrderLineItemScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput.prototype, "deleteMany", void 0);
BookingOrderLineItemUpdateManyWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpdateManyWithoutLineItemPriceInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpdateManyWithoutLineItemPriceInput);
exports.BookingOrderLineItemUpdateManyWithoutLineItemPriceInput = BookingOrderLineItemUpdateManyWithoutLineItemPriceInput;
