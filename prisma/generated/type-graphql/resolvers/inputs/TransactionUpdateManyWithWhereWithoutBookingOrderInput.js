"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyWithWhereWithoutBookingOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionScalarWhereInput_1 = require("../inputs/TransactionScalarWhereInput");
const TransactionUpdateManyMutationInput_1 = require("../inputs/TransactionUpdateManyMutationInput");
let TransactionUpdateManyWithWhereWithoutBookingOrderInput = class TransactionUpdateManyWithWhereWithoutBookingOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionScalarWhereInput_1.TransactionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionScalarWhereInput_1.TransactionScalarWhereInput)
], TransactionUpdateManyWithWhereWithoutBookingOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyMutationInput_1.TransactionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyMutationInput_1.TransactionUpdateManyMutationInput)
], TransactionUpdateManyWithWhereWithoutBookingOrderInput.prototype, "data", void 0);
TransactionUpdateManyWithWhereWithoutBookingOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyWithWhereWithoutBookingOrderInput", {
        isAbstract: true
    })
], TransactionUpdateManyWithWhereWithoutBookingOrderInput);
exports.TransactionUpdateManyWithWhereWithoutBookingOrderInput = TransactionUpdateManyWithWhereWithoutBookingOrderInput;
