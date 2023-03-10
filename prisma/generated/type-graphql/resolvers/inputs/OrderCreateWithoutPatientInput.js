"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutPatientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateNestedOneWithoutOrdersInput_1 = require("../inputs/MealCreateNestedOneWithoutOrdersInput");
const OrderLineItemCreateNestedManyWithoutBookingInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutBookingInput");
const TenantCreateNestedOneWithoutOrdersInput_1 = require("../inputs/TenantCreateNestedOneWithoutOrdersInput");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateWithoutPatientInput = class OrderCreateWithoutPatientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutPatientInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedOneWithoutOrdersInput_1.MealCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateNestedOneWithoutOrdersInput_1.MealCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutPatientInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutPatientInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutOrdersInput_1.TenantCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutOrdersInput_1.TenantCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutPatientInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutBookingInput_1.OrderLineItemCreateNestedManyWithoutBookingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutBookingInput_1.OrderLineItemCreateNestedManyWithoutBookingInput)
], OrderCreateWithoutPatientInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutPatientInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutPatientInput.prototype, "updatedAt", void 0);
OrderCreateWithoutPatientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutPatientInput", {
        isAbstract: true
    })
], OrderCreateWithoutPatientInput);
exports.OrderCreateWithoutPatientInput = OrderCreateWithoutPatientInput;
