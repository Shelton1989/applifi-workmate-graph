"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutBuyerInput_1 = require("../inputs/OrderUpdateWithoutBuyerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutBuyerInput = class OrderUpdateWithWhereUniqueWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutBuyerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutBuyerInput_1.OrderUpdateWithoutBuyerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutBuyerInput_1.OrderUpdateWithoutBuyerInput)
], OrderUpdateWithWhereUniqueWithoutBuyerInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutBuyerInput", {
        isAbstract: true
    })
], OrderUpdateWithWhereUniqueWithoutBuyerInput);
exports.OrderUpdateWithWhereUniqueWithoutBuyerInput = OrderUpdateWithWhereUniqueWithoutBuyerInput;
