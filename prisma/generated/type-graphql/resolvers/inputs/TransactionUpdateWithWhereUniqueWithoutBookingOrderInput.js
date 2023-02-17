"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithWhereUniqueWithoutBookingOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionUpdateWithoutBookingOrderInput_1 = require("../inputs/TransactionUpdateWithoutBookingOrderInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateWithWhereUniqueWithoutBookingOrderInput = class TransactionUpdateWithWhereUniqueWithoutBookingOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpdateWithWhereUniqueWithoutBookingOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutBookingOrderInput_1.TransactionUpdateWithoutBookingOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutBookingOrderInput_1.TransactionUpdateWithoutBookingOrderInput)
], TransactionUpdateWithWhereUniqueWithoutBookingOrderInput.prototype, "data", void 0);
TransactionUpdateWithWhereUniqueWithoutBookingOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutBookingOrderInput", {
        isAbstract: true
    })
], TransactionUpdateWithWhereUniqueWithoutBookingOrderInput);
exports.TransactionUpdateWithWhereUniqueWithoutBookingOrderInput = TransactionUpdateWithWhereUniqueWithoutBookingOrderInput;
