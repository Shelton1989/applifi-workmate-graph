"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let OrderCreateManyTenantInput = class OrderCreateManyTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyTenantInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyTenantInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyTenantInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], OrderCreateManyTenantInput.prototype, "patientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateManyTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OrderCreateManyTenantInput.prototype, "updatedAt", void 0);
OrderCreateManyTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyTenantInput", {
        isAbstract: true
    })
], OrderCreateManyTenantInput);
exports.OrderCreateManyTenantInput = OrderCreateManyTenantInput;
