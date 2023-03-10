"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutPatientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutPatientInput_1 = require("../inputs/OrderUpdateWithoutPatientInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutPatientInput = class OrderUpdateWithWhereUniqueWithoutPatientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutPatientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutPatientInput_1.OrderUpdateWithoutPatientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutPatientInput_1.OrderUpdateWithoutPatientInput)
], OrderUpdateWithWhereUniqueWithoutPatientInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutPatientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutPatientInput", {
        isAbstract: true
    })
], OrderUpdateWithWhereUniqueWithoutPatientInput);
exports.OrderUpdateWithWhereUniqueWithoutPatientInput = OrderUpdateWithWhereUniqueWithoutPatientInput;
