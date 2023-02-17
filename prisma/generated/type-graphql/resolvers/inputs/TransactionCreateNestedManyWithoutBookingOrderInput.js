"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateNestedManyWithoutBookingOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyBookingOrderInputEnvelope_1 = require("../inputs/TransactionCreateManyBookingOrderInputEnvelope");
const TransactionCreateOrConnectWithoutBookingOrderInput_1 = require("../inputs/TransactionCreateOrConnectWithoutBookingOrderInput");
const TransactionCreateWithoutBookingOrderInput_1 = require("../inputs/TransactionCreateWithoutBookingOrderInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateNestedManyWithoutBookingOrderInput = class TransactionCreateNestedManyWithoutBookingOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutBookingOrderInput_1.TransactionCreateWithoutBookingOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutBookingOrderInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutBookingOrderInput_1.TransactionCreateOrConnectWithoutBookingOrderInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutBookingOrderInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyBookingOrderInputEnvelope_1.TransactionCreateManyBookingOrderInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyBookingOrderInputEnvelope_1.TransactionCreateManyBookingOrderInputEnvelope)
], TransactionCreateNestedManyWithoutBookingOrderInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutBookingOrderInput.prototype, "connect", void 0);
TransactionCreateNestedManyWithoutBookingOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateNestedManyWithoutBookingOrderInput", {
        isAbstract: true
    })
], TransactionCreateNestedManyWithoutBookingOrderInput);
exports.TransactionCreateNestedManyWithoutBookingOrderInput = TransactionCreateNestedManyWithoutBookingOrderInput;
