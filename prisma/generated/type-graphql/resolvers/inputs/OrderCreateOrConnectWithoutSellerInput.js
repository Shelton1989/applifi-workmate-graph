"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutSellerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutSellerInput_1 = require("../inputs/OrderCreateWithoutSellerInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutSellerInput = class OrderCreateOrConnectWithoutSellerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutSellerInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutSellerInput_1.OrderCreateWithoutSellerInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutSellerInput_1.OrderCreateWithoutSellerInput)
], OrderCreateOrConnectWithoutSellerInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutSellerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutSellerInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutSellerInput);
exports.OrderCreateOrConnectWithoutSellerInput = OrderCreateOrConnectWithoutSellerInput;
