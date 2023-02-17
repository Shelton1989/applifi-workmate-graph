"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpsertWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateWithoutTransactionsInput_1 = require("../inputs/BookingOrderCreateWithoutTransactionsInput");
const BookingOrderUpdateWithoutTransactionsInput_1 = require("../inputs/BookingOrderUpdateWithoutTransactionsInput");
let BookingOrderUpsertWithoutTransactionsInput = class BookingOrderUpsertWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateWithoutTransactionsInput_1.BookingOrderUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateWithoutTransactionsInput_1.BookingOrderUpdateWithoutTransactionsInput)
], BookingOrderUpsertWithoutTransactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutTransactionsInput_1.BookingOrderCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutTransactionsInput_1.BookingOrderCreateWithoutTransactionsInput)
], BookingOrderUpsertWithoutTransactionsInput.prototype, "create", void 0);
BookingOrderUpsertWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpsertWithoutTransactionsInput", {
        isAbstract: true
    })
], BookingOrderUpsertWithoutTransactionsInput);
exports.BookingOrderUpsertWithoutTransactionsInput = BookingOrderUpsertWithoutTransactionsInput;
