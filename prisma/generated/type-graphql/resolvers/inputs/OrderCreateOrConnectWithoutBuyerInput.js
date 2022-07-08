"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutBuyerInput_1 = require("../inputs/OrderCreateWithoutBuyerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutBuyerInput = class OrderCreateOrConnectWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutBuyerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutBuyerInput_1.OrderCreateWithoutBuyerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutBuyerInput_1.OrderCreateWithoutBuyerInput)
], OrderCreateOrConnectWithoutBuyerInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutBuyerInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutBuyerInput);
exports.OrderCreateOrConnectWithoutBuyerInput = OrderCreateOrConnectWithoutBuyerInput;
