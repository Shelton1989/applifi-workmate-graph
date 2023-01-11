"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTenant = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCountAggregate_1 = require("../outputs/TenantCountAggregate");
const TenantMaxAggregate_1 = require("../outputs/TenantMaxAggregate");
const TenantMinAggregate_1 = require("../outputs/TenantMinAggregate");
let AggregateTenant = class AggregateTenant {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCountAggregate_1.TenantCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCountAggregate_1.TenantCountAggregate)
], AggregateTenant.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantMinAggregate_1.TenantMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantMinAggregate_1.TenantMinAggregate)
], AggregateTenant.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantMaxAggregate_1.TenantMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantMaxAggregate_1.TenantMaxAggregate)
], AggregateTenant.prototype, "_max", void 0);
AggregateTenant = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTenant", {
        isAbstract: true
    })
], AggregateTenant);
exports.AggregateTenant = AggregateTenant;
