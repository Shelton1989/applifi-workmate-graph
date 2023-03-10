"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateNestedManyWithoutBookingInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutBookingInput");
const TenantCreateNestedOneWithoutOrdersInput_1 = require("../inputs/TenantCreateNestedOneWithoutOrdersInput");
const UserCreateNestedOneWithoutBookingsInput_1 = require("../inputs/UserCreateNestedOneWithoutBookingsInput");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateWithoutMealInput = class OrderCreateWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutMealInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutMealInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput)
], OrderCreateWithoutMealInput.prototype, "Patient", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutOrdersInput_1.TenantCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutOrdersInput_1.TenantCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutMealInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutBookingInput_1.OrderLineItemCreateNestedManyWithoutBookingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutBookingInput_1.OrderLineItemCreateNestedManyWithoutBookingInput)
], OrderCreateWithoutMealInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutMealInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutMealInput.prototype, "updatedAt", void 0);
OrderCreateWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutMealInput", {
        isAbstract: true
    })
], OrderCreateWithoutMealInput);
exports.OrderCreateWithoutMealInput = OrderCreateWithoutMealInput;
