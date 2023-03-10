"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutMealInput_1 = require("../inputs/OrderCreateWithoutMealInput");
const OrderUpdateWithoutMealInput_1 = require("../inputs/OrderUpdateWithoutMealInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutMealInput = class OrderUpsertWithWhereUniqueWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutMealInput_1.OrderUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutMealInput_1.OrderUpdateWithoutMealInput)
], OrderUpsertWithWhereUniqueWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutMealInput_1.OrderCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutMealInput_1.OrderCreateWithoutMealInput)
], OrderUpsertWithWhereUniqueWithoutMealInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutMealInput", {
        isAbstract: true
    })
], OrderUpsertWithWhereUniqueWithoutMealInput);
exports.OrderUpsertWithWhereUniqueWithoutMealInput = OrderUpsertWithWhereUniqueWithoutMealInput;
