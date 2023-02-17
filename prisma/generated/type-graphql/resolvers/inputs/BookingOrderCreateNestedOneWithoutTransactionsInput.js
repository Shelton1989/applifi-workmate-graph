"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateNestedOneWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/BookingOrderCreateOrConnectWithoutTransactionsInput");
const BookingOrderCreateWithoutTransactionsInput_1 = require("../inputs/BookingOrderCreateWithoutTransactionsInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderCreateNestedOneWithoutTransactionsInput = class BookingOrderCreateNestedOneWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutTransactionsInput_1.BookingOrderCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutTransactionsInput_1.BookingOrderCreateWithoutTransactionsInput)
], BookingOrderCreateNestedOneWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateOrConnectWithoutTransactionsInput_1.BookingOrderCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateOrConnectWithoutTransactionsInput_1.BookingOrderCreateOrConnectWithoutTransactionsInput)
], BookingOrderCreateNestedOneWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderCreateNestedOneWithoutTransactionsInput.prototype, "connect", void 0);
BookingOrderCreateNestedOneWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateNestedOneWithoutTransactionsInput", {
        isAbstract: true
    })
], BookingOrderCreateNestedOneWithoutTransactionsInput);
exports.BookingOrderCreateNestedOneWithoutTransactionsInput = BookingOrderCreateNestedOneWithoutTransactionsInput;
