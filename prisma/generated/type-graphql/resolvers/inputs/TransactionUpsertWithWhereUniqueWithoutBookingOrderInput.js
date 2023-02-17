"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpsertWithWhereUniqueWithoutBookingOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutBookingOrderInput_1 = require("../inputs/TransactionCreateWithoutBookingOrderInput");
const TransactionUpdateWithoutBookingOrderInput_1 = require("../inputs/TransactionUpdateWithoutBookingOrderInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpsertWithWhereUniqueWithoutBookingOrderInput = class TransactionUpsertWithWhereUniqueWithoutBookingOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpsertWithWhereUniqueWithoutBookingOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutBookingOrderInput_1.TransactionUpdateWithoutBookingOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutBookingOrderInput_1.TransactionUpdateWithoutBookingOrderInput)
], TransactionUpsertWithWhereUniqueWithoutBookingOrderInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutBookingOrderInput_1.TransactionCreateWithoutBookingOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutBookingOrderInput_1.TransactionCreateWithoutBookingOrderInput)
], TransactionUpsertWithWhereUniqueWithoutBookingOrderInput.prototype, "create", void 0);
TransactionUpsertWithWhereUniqueWithoutBookingOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutBookingOrderInput", {
        isAbstract: true
    })
], TransactionUpsertWithWhereUniqueWithoutBookingOrderInput);
exports.TransactionUpsertWithWhereUniqueWithoutBookingOrderInput = TransactionUpsertWithWhereUniqueWithoutBookingOrderInput;
