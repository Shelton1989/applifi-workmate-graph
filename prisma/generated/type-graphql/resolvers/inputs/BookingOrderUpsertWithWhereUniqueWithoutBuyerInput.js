"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpsertWithWhereUniqueWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateWithoutBuyerInput_1 = require("../inputs/BookingOrderCreateWithoutBuyerInput");
const BookingOrderUpdateWithoutBuyerInput_1 = require("../inputs/BookingOrderUpdateWithoutBuyerInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpsertWithWhereUniqueWithoutBuyerInput = class BookingOrderUpsertWithWhereUniqueWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderUpsertWithWhereUniqueWithoutBuyerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateWithoutBuyerInput_1.BookingOrderUpdateWithoutBuyerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateWithoutBuyerInput_1.BookingOrderUpdateWithoutBuyerInput)
], BookingOrderUpsertWithWhereUniqueWithoutBuyerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutBuyerInput_1.BookingOrderCreateWithoutBuyerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutBuyerInput_1.BookingOrderCreateWithoutBuyerInput)
], BookingOrderUpsertWithWhereUniqueWithoutBuyerInput.prototype, "create", void 0);
BookingOrderUpsertWithWhereUniqueWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpsertWithWhereUniqueWithoutBuyerInput", {
        isAbstract: true
    })
], BookingOrderUpsertWithWhereUniqueWithoutBuyerInput);
exports.BookingOrderUpsertWithWhereUniqueWithoutBuyerInput = BookingOrderUpsertWithWhereUniqueWithoutBuyerInput;
