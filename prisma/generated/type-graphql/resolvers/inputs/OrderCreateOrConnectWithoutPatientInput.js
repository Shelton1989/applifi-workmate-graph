"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutPatientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutPatientInput_1 = require("../inputs/OrderCreateWithoutPatientInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutPatientInput = class OrderCreateOrConnectWithoutPatientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutPatientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutPatientInput_1.OrderCreateWithoutPatientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutPatientInput_1.OrderCreateWithoutPatientInput)
], OrderCreateOrConnectWithoutPatientInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutPatientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutPatientInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutPatientInput);
exports.OrderCreateOrConnectWithoutPatientInput = OrderCreateOrConnectWithoutPatientInput;
