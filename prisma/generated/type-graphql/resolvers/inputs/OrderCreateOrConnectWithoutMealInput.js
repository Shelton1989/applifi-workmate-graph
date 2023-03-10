"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutMealInput_1 = require("../inputs/OrderCreateWithoutMealInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutMealInput = class OrderCreateOrConnectWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutMealInput_1.OrderCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutMealInput_1.OrderCreateWithoutMealInput)
], OrderCreateOrConnectWithoutMealInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutMealInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutMealInput);
exports.OrderCreateOrConnectWithoutMealInput = OrderCreateOrConnectWithoutMealInput;
