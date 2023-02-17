"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateOrConnectWithoutBookingOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutBookingOrderInput_1 = require("../inputs/TransactionCreateWithoutBookingOrderInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateOrConnectWithoutBookingOrderInput = class TransactionCreateOrConnectWithoutBookingOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionCreateOrConnectWithoutBookingOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutBookingOrderInput_1.TransactionCreateWithoutBookingOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutBookingOrderInput_1.TransactionCreateWithoutBookingOrderInput)
], TransactionCreateOrConnectWithoutBookingOrderInput.prototype, "create", void 0);
TransactionCreateOrConnectWithoutBookingOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateOrConnectWithoutBookingOrderInput", {
        isAbstract: true
    })
], TransactionCreateOrConnectWithoutBookingOrderInput);
exports.TransactionCreateOrConnectWithoutBookingOrderInput = TransactionCreateOrConnectWithoutBookingOrderInput;
