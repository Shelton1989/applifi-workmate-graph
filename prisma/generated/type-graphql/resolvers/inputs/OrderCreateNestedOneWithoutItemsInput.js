"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedOneWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateOrConnectWithoutItemsInput_1 = require("../inputs/OrderCreateOrConnectWithoutItemsInput");
const OrderCreateWithoutItemsInput_1 = require("../inputs/OrderCreateWithoutItemsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedOneWithoutItemsInput = class OrderCreateNestedOneWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutItemsInput_1.OrderCreateWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutItemsInput_1.OrderCreateWithoutItemsInput)
], OrderCreateNestedOneWithoutItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutItemsInput_1.OrderCreateOrConnectWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateOrConnectWithoutItemsInput_1.OrderCreateOrConnectWithoutItemsInput)
], OrderCreateNestedOneWithoutItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateNestedOneWithoutItemsInput.prototype, "connect", void 0);
OrderCreateNestedOneWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedOneWithoutItemsInput", {
        isAbstract: true
    })
], OrderCreateNestedOneWithoutItemsInput);
exports.OrderCreateNestedOneWithoutItemsInput = OrderCreateNestedOneWithoutItemsInput;
