"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateManyBookingOrderInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyBookingOrderInput_1 = require("../inputs/TransactionCreateManyBookingOrderInput");
let TransactionCreateManyBookingOrderInputEnvelope = class TransactionCreateManyBookingOrderInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateManyBookingOrderInput_1.TransactionCreateManyBookingOrderInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateManyBookingOrderInputEnvelope.prototype, "data", void 0);
TransactionCreateManyBookingOrderInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateManyBookingOrderInputEnvelope", {
        isAbstract: true
    })
], TransactionCreateManyBookingOrderInputEnvelope);
exports.TransactionCreateManyBookingOrderInputEnvelope = TransactionCreateManyBookingOrderInputEnvelope;
