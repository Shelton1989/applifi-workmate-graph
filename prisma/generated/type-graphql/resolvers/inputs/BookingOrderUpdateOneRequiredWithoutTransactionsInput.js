"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateOneRequiredWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/BookingOrderCreateOrConnectWithoutTransactionsInput");
const BookingOrderCreateWithoutTransactionsInput_1 = require("../inputs/BookingOrderCreateWithoutTransactionsInput");
const BookingOrderUpdateWithoutTransactionsInput_1 = require("../inputs/BookingOrderUpdateWithoutTransactionsInput");
const BookingOrderUpsertWithoutTransactionsInput_1 = require("../inputs/BookingOrderUpsertWithoutTransactionsInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderUpdateOneRequiredWithoutTransactionsInput = class BookingOrderUpdateOneRequiredWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutTransactionsInput_1.BookingOrderCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutTransactionsInput_1.BookingOrderCreateWithoutTransactionsInput)
], BookingOrderUpdateOneRequiredWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateOrConnectWithoutTransactionsInput_1.BookingOrderCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateOrConnectWithoutTransactionsInput_1.BookingOrderCreateOrConnectWithoutTransactionsInput)
], BookingOrderUpdateOneRequiredWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpsertWithoutTransactionsInput_1.BookingOrderUpsertWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderUpsertWithoutTransactionsInput_1.BookingOrderUpsertWithoutTransactionsInput)
], BookingOrderUpdateOneRequiredWithoutTransactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderUpdateOneRequiredWithoutTransactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateWithoutTransactionsInput_1.BookingOrderUpdateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateWithoutTransactionsInput_1.BookingOrderUpdateWithoutTransactionsInput)
], BookingOrderUpdateOneRequiredWithoutTransactionsInput.prototype, "update", void 0);
BookingOrderUpdateOneRequiredWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateOneRequiredWithoutTransactionsInput", {
        isAbstract: true
    })
], BookingOrderUpdateOneRequiredWithoutTransactionsInput);
exports.BookingOrderUpdateOneRequiredWithoutTransactionsInput = BookingOrderUpdateOneRequiredWithoutTransactionsInput;
