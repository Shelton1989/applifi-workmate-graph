"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUpdateWithoutPatientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumORDER_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumORDER_STATUSFieldUpdateOperationsInput");
const MealUpdateOneRequiredWithoutOrdersInput_1 = require("../inputs/MealUpdateOneRequiredWithoutOrdersInput");
const OrderLineItemUpdateManyWithoutOrderInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutOrderInput");
const TenantUpdateOneRequiredWithoutOrdersInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutOrdersInput");
let OrderUpdateWithoutPatientInput = class OrderUpdateWithoutPatientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateOneRequiredWithoutOrdersInput_1.MealUpdateOneRequiredWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateOneRequiredWithoutOrdersInput_1.MealUpdateOneRequiredWithoutOrdersInput)
], OrderUpdateWithoutPatientInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumORDER_STATUSFieldUpdateOperationsInput_1.EnumORDER_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumORDER_STATUSFieldUpdateOperationsInput_1.EnumORDER_STATUSFieldUpdateOperationsInput)
], OrderUpdateWithoutPatientInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutOrdersInput_1.TenantUpdateOneRequiredWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutOrdersInput_1.TenantUpdateOneRequiredWithoutOrdersInput)
], OrderUpdateWithoutPatientInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutOrderInput_1.OrderLineItemUpdateManyWithoutOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutOrderInput_1.OrderLineItemUpdateManyWithoutOrderInput)
], OrderUpdateWithoutPatientInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutPatientInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderUpdateWithoutPatientInput.prototype, "updatedAt", void 0);
OrderUpdateWithoutPatientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderUpdateWithoutPatientInput", {
        isAbstract: true
    })
], OrderUpdateWithoutPatientInput);
exports.OrderUpdateWithoutPatientInput = OrderUpdateWithoutPatientInput;
