"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateOrConnectWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateWithoutBuyerInput_1 = require("../inputs/BookingOrderCreateWithoutBuyerInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderCreateOrConnectWithoutBuyerInput = class BookingOrderCreateOrConnectWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput)
], BookingOrderCreateOrConnectWithoutBuyerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateWithoutBuyerInput_1.BookingOrderCreateWithoutBuyerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateWithoutBuyerInput_1.BookingOrderCreateWithoutBuyerInput)
], BookingOrderCreateOrConnectWithoutBuyerInput.prototype, "create", void 0);
BookingOrderCreateOrConnectWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateOrConnectWithoutBuyerInput", {
        isAbstract: true
    })
], BookingOrderCreateOrConnectWithoutBuyerInput);
exports.BookingOrderCreateOrConnectWithoutBuyerInput = BookingOrderCreateOrConnectWithoutBuyerInput;
