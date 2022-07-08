"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpsertWithWhereUniqueWithoutSellerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutSellerInput_1 = require("../inputs/OrderCreateWithoutSellerInput");
const OrderUpdateWithoutSellerInput_1 = require("../inputs/OrderUpdateWithoutSellerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderUpsertWithWhereUniqueWithoutSellerInput = class OrderUpsertWithWhereUniqueWithoutSellerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderUpsertWithWhereUniqueWithoutSellerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateWithoutSellerInput_1.OrderUpdateWithoutSellerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderUpdateWithoutSellerInput_1.OrderUpdateWithoutSellerInput)
], OrderUpsertWithWhereUniqueWithoutSellerInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutSellerInput_1.OrderCreateWithoutSellerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutSellerInput_1.OrderCreateWithoutSellerInput)
], OrderUpsertWithWhereUniqueWithoutSellerInput.prototype, "create", void 0);
OrderUpsertWithWhereUniqueWithoutSellerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutSellerInput", {
        isAbstract: true
    })
], OrderUpsertWithWhereUniqueWithoutSellerInput);
exports.OrderUpsertWithWhereUniqueWithoutSellerInput = OrderUpsertWithWhereUniqueWithoutSellerInput;
