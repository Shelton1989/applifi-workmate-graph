"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateWithWhereUniqueWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderUpdateWithoutBuyerInput_1 = require("../inputs/BookingOrderUpdateWithoutBuyerInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpdateWithWhereUniqueWithoutBuyerInput = class BookingOrderUpdateWithWhereUniqueWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderUpdateWithWhereUniqueWithoutBuyerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateWithoutBuyerInput_1.BookingOrderUpdateWithoutBuyerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateWithoutBuyerInput_1.BookingOrderUpdateWithoutBuyerInput)
], BookingOrderUpdateWithWhereUniqueWithoutBuyerInput.prototype, "data", void 0);
BookingOrderUpdateWithWhereUniqueWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateWithWhereUniqueWithoutBuyerInput", {
        isAbstract: true
    })
], BookingOrderUpdateWithWhereUniqueWithoutBuyerInput);
exports.BookingOrderUpdateWithWhereUniqueWithoutBuyerInput = BookingOrderUpdateWithWhereUniqueWithoutBuyerInput;
