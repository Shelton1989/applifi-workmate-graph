"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyTenantInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyTenantInput_1 = require("../inputs/OrderCreateManyTenantInput");
let OrderCreateManyTenantInputEnvelope = class OrderCreateManyTenantInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManyTenantInput_1.OrderCreateManyTenantInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManyTenantInputEnvelope.prototype, "data", void 0);
OrderCreateManyTenantInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyTenantInputEnvelope", {
        isAbstract: true
    })
], OrderCreateManyTenantInputEnvelope);
exports.OrderCreateManyTenantInputEnvelope = OrderCreateManyTenantInputEnvelope;
