"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateNestedOneWithoutOrdersInput_1 = require("../inputs/MealCreateNestedOneWithoutOrdersInput");
const OrderLineItemCreateNestedManyWithoutBookingInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutBookingInput");
const TenantCreateNestedOneWithoutOrdersInput_1 = require("../inputs/TenantCreateNestedOneWithoutOrdersInput");
const UserCreateNestedOneWithoutBookingsInput_1 = require("../inputs/UserCreateNestedOneWithoutBookingsInput");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateInput = class OrderCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedOneWithoutOrdersInput_1.MealCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateNestedOneWithoutOrdersInput_1.MealCreateNestedOneWithoutOrdersInput)
], OrderCreateInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput)
], OrderCreateInput.prototype, "Patient", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutOrdersInput_1.TenantCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutOrdersInput_1.TenantCreateNestedOneWithoutOrdersInput)
], OrderCreateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutBookingInput_1.OrderLineItemCreateNestedManyWithoutBookingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutBookingInput_1.OrderLineItemCreateNestedManyWithoutBookingInput)
], OrderCreateInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateInput.prototype, "updatedAt", void 0);
OrderCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateInput", {
        isAbstract: true
    })
], OrderCreateInput);
exports.OrderCreateInput = OrderCreateInput;
