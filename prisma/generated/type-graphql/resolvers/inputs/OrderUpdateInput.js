"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumORDER_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumORDER_STATUSFieldUpdateOperationsInput");
const MealUpdateOneRequiredWithoutOrdersInput_1 = require("../inputs/MealUpdateOneRequiredWithoutOrdersInput");
const OrderLineItemUpdateManyWithoutOrderInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutOrderInput");
const TenantUpdateOneRequiredWithoutOrdersInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutOrdersInput");
const UserUpdateOneRequiredWithoutBookingsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutBookingsInput");
let OrderUpdateInput = class OrderUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateOneRequiredWithoutOrdersInput_1.MealUpdateOneRequiredWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateOneRequiredWithoutOrdersInput_1.MealUpdateOneRequiredWithoutOrdersInput)
], OrderUpdateInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumORDER_STATUSFieldUpdateOperationsInput_1.EnumORDER_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumORDER_STATUSFieldUpdateOperationsInput_1.EnumORDER_STATUSFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookingsInput_1.UserUpdateOneRequiredWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutBookingsInput_1.UserUpdateOneRequiredWithoutBookingsInput)
], OrderUpdateInput.prototype, "Patient", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutOrdersInput_1.TenantUpdateOneRequiredWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutOrdersInput_1.TenantUpdateOneRequiredWithoutOrdersInput)
], OrderUpdateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutOrderInput_1.OrderLineItemUpdateManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutOrderInput_1.OrderLineItemUpdateManyWithoutOrderInput)
], OrderUpdateInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateInput.prototype, "updatedAt", void 0);
OrderUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateInput", {
        isAbstract: true
    })
], OrderUpdateInput);
exports.OrderUpdateInput = OrderUpdateInput;
