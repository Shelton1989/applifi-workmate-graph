"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutPatientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutPatientInput_1 = require("../inputs/OrderCreateWithoutPatientInput");
const OrderUpdateWithoutPatientInput_1 = require("../inputs/OrderUpdateWithoutPatientInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutPatientInput = class OrderUpsertWithWhereUniqueWithoutPatientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutPatientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutPatientInput_1.OrderUpdateWithoutPatientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutPatientInput_1.OrderUpdateWithoutPatientInput)
], OrderUpsertWithWhereUniqueWithoutPatientInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutPatientInput_1.OrderCreateWithoutPatientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutPatientInput_1.OrderCreateWithoutPatientInput)
], OrderUpsertWithWhereUniqueWithoutPatientInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutPatientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutPatientInput", {
        isAbstract: true
    })
], OrderUpsertWithWhereUniqueWithoutPatientInput);
exports.OrderUpsertWithWhereUniqueWithoutPatientInput = OrderUpsertWithWhereUniqueWithoutPatientInput;
