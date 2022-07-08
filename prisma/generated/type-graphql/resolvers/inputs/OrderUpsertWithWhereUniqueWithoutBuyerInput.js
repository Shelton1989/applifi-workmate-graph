"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutBuyerInput_1 = require("../inputs/OrderCreateWithoutBuyerInput");
const OrderUpdateWithoutBuyerInput_1 = require("../inputs/OrderUpdateWithoutBuyerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutBuyerInput = class OrderUpsertWithWhereUniqueWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutBuyerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutBuyerInput_1.OrderUpdateWithoutBuyerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutBuyerInput_1.OrderUpdateWithoutBuyerInput)
], OrderUpsertWithWhereUniqueWithoutBuyerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutBuyerInput_1.OrderCreateWithoutBuyerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutBuyerInput_1.OrderCreateWithoutBuyerInput)
], OrderUpsertWithWhereUniqueWithoutBuyerInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutBuyerInput", {
        isAbstract: true
    })
], OrderUpsertWithWhereUniqueWithoutBuyerInput);
exports.OrderUpsertWithWhereUniqueWithoutBuyerInput = OrderUpsertWithWhereUniqueWithoutBuyerInput;
