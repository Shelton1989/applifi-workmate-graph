"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateOrConnectWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateWithoutTransactionsInput_1 = require("../inputs/BookingOrderCreateWithoutTransactionsInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderCreateOrConnectWithoutTransactionsInput = class BookingOrderCreateOrConnectWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderCreateOrConnectWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutTransactionsInput_1.BookingOrderCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutTransactionsInput_1.BookingOrderCreateWithoutTransactionsInput)
], BookingOrderCreateOrConnectWithoutTransactionsInput.prototype, "create", void 0);
BookingOrderCreateOrConnectWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateOrConnectWithoutTransactionsInput", {
        isAbstract: true
    })
], BookingOrderCreateOrConnectWithoutTransactionsInput);
exports.BookingOrderCreateOrConnectWithoutTransactionsInput = BookingOrderCreateOrConnectWithoutTransactionsInput;
