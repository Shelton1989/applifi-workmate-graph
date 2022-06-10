"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutUserInput_1 = require("../inputs/OrderCreateWithoutUserInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutUserInput = class OrderCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutUserInput_1.OrderCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutUserInput_1.OrderCreateWithoutUserInput)
], OrderCreateOrConnectWithoutUserInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutUserInput);
exports.OrderCreateOrConnectWithoutUserInput = OrderCreateOrConnectWithoutUserInput;
