"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateOrConnectWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateWithoutItemsInput_1 = require("../inputs/OrderCreateWithoutItemsInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateOrConnectWithoutItemsInput = class OrderCreateOrConnectWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderWhereUniqueInput_1.OrderWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderWhereUniqueInput_1.OrderWhereUniqueInput)
], OrderCreateOrConnectWithoutItemsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateWithoutItemsInput_1.OrderCreateWithoutItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderCreateWithoutItemsInput_1.OrderCreateWithoutItemsInput)
], OrderCreateOrConnectWithoutItemsInput.prototype, "create", void 0);
OrderCreateOrConnectWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateOrConnectWithoutItemsInput", {
        isAbstract: true
    })
], OrderCreateOrConnectWithoutItemsInput);
exports.OrderCreateOrConnectWithoutItemsInput = OrderCreateOrConnectWithoutItemsInput;
