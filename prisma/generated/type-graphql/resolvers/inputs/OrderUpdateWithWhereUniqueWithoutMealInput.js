"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutMealInput_1 = require("../inputs/OrderUpdateWithoutMealInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutMealInput = class OrderUpdateWithWhereUniqueWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutMealInput_1.OrderUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutMealInput_1.OrderUpdateWithoutMealInput)
], OrderUpdateWithWhereUniqueWithoutMealInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutMealInput", {
        isAbstract: true
    })
], OrderUpdateWithWhereUniqueWithoutMealInput);
exports.OrderUpdateWithWhereUniqueWithoutMealInput = OrderUpdateWithWhereUniqueWithoutMealInput;
