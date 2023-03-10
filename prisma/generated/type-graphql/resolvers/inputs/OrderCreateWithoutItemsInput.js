"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateNestedOneWithoutOrdersInput_1 = require("../inputs/MealCreateNestedOneWithoutOrdersInput");
const TenantCreateNestedOneWithoutOrdersInput_1 = require("../inputs/TenantCreateNestedOneWithoutOrdersInput");
const UserCreateNestedOneWithoutBookingsInput_1 = require("../inputs/UserCreateNestedOneWithoutBookingsInput");
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateWithoutItemsInput = class OrderCreateWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedOneWithoutOrdersInput_1.MealCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateNestedOneWithoutOrdersInput_1.MealCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutItemsInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateWithoutItemsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput)
], OrderCreateWithoutItemsInput.prototype, "Patient", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutOrdersInput_1.TenantCreateNestedOneWithoutOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutOrdersInput_1.TenantCreateNestedOneWithoutOrdersInput)
], OrderCreateWithoutItemsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateWithoutItemsInput.prototype, "updatedAt", void 0);
OrderCreateWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateWithoutItemsInput", {
        isAbstract: true
    })
], OrderCreateWithoutItemsInput);
exports.OrderCreateWithoutItemsInput = OrderCreateWithoutItemsInput;
