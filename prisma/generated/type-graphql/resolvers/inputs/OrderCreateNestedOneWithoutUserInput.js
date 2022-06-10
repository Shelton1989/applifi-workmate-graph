"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutUserInput_1 = require("../inputs/OrderCreateOrConnectWithoutUserInput");
const OrderCreateWithoutUserInput_1 = require("../inputs/OrderCreateWithoutUserInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedOneWithoutUserInput = class OrderCreateNestedOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutUserInput_1.OrderCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutUserInput_1.OrderCreateWithoutUserInput)
], OrderCreateNestedOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutUserInput_1.OrderCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateOrConnectWithoutUserInput_1.OrderCreateOrConnectWithoutUserInput)
], OrderCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
OrderCreateNestedOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], OrderCreateNestedOneWithoutUserInput);
exports.OrderCreateNestedOneWithoutUserInput = OrderCreateNestedOneWithoutUserInput;
