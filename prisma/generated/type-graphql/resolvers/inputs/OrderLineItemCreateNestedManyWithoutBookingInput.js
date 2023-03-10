"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateNestedManyWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManyBookingInputEnvelope_1 = require("../inputs/OrderLineItemCreateManyBookingInputEnvelope");
const OrderLineItemCreateOrConnectWithoutBookingInput_1 = require("../inputs/OrderLineItemCreateOrConnectWithoutBookingInput");
const OrderLineItemCreateWithoutBookingInput_1 = require("../inputs/OrderLineItemCreateWithoutBookingInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateNestedManyWithoutBookingInput = class OrderLineItemCreateNestedManyWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateWithoutBookingInput_1.OrderLineItemCreateWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutBookingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateOrConnectWithoutBookingInput_1.OrderLineItemCreateOrConnectWithoutBookingInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutBookingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateManyBookingInputEnvelope_1.OrderLineItemCreateManyBookingInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateManyBookingInputEnvelope_1.OrderLineItemCreateManyBookingInputEnvelope)
], OrderLineItemCreateNestedManyWithoutBookingInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateNestedManyWithoutBookingInput.prototype, "connect", void 0);
OrderLineItemCreateNestedManyWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateNestedManyWithoutBookingInput", {
        isAbstract: true
    })
], OrderLineItemCreateNestedManyWithoutBookingInput);
exports.OrderLineItemCreateNestedManyWithoutBookingInput = OrderLineItemCreateNestedManyWithoutBookingInput;
