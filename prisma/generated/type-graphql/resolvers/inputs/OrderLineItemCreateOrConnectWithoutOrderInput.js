"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateOrConnectWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutOrderInput_1 = require("../inputs/OrderLineItemCreateWithoutOrderInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateOrConnectWithoutOrderInput = class OrderLineItemCreateOrConnectWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemCreateOrConnectWithoutOrderInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutOrderInput_1.OrderLineItemCreateWithoutOrderInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutOrderInput_1.OrderLineItemCreateWithoutOrderInput)
], OrderLineItemCreateOrConnectWithoutOrderInput.prototype, "create", void 0);
OrderLineItemCreateOrConnectWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateOrConnectWithoutOrderInput", {
        isAbstract: true
    })
], OrderLineItemCreateOrConnectWithoutOrderInput);
exports.OrderLineItemCreateOrConnectWithoutOrderInput = OrderLineItemCreateOrConnectWithoutOrderInput;
