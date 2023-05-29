"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBilling = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCountAggregate_1 = require("../outputs/BillingCountAggregate");
const BillingMaxAggregate_1 = require("../outputs/BillingMaxAggregate");
const BillingMinAggregate_1 = require("../outputs/BillingMinAggregate");
let AggregateBilling = class AggregateBilling {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCountAggregate_1.BillingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCountAggregate_1.BillingCountAggregate)
], AggregateBilling.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingMinAggregate_1.BillingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingMinAggregate_1.BillingMinAggregate)
], AggregateBilling.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingMaxAggregate_1.BillingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingMaxAggregate_1.BillingMaxAggregate)
], AggregateBilling.prototype, "_max", void 0);
AggregateBilling = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBilling", {
        isAbstract: true
    })
], AggregateBilling);
exports.AggregateBilling = AggregateBilling;
