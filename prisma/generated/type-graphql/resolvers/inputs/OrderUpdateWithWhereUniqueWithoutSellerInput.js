"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithWhereUniqueWithoutSellerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderUpdateWithoutSellerInput_1 = require("../inputs/OrderUpdateWithoutSellerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpdateWithWhereUniqueWithoutSellerInput = class OrderUpdateWithWhereUniqueWithoutSellerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpdateWithWhereUniqueWithoutSellerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutSellerInput_1.OrderUpdateWithoutSellerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutSellerInput_1.OrderUpdateWithoutSellerInput)
], OrderUpdateWithWhereUniqueWithoutSellerInput.prototype, "data", void 0);
OrderUpdateWithWhereUniqueWithoutSellerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutSellerInput", {
        isAbstract: true
    })
], OrderUpdateWithWhereUniqueWithoutSellerInput);
exports.OrderUpdateWithWhereUniqueWithoutSellerInput = OrderUpdateWithWhereUniqueWithoutSellerInput;
