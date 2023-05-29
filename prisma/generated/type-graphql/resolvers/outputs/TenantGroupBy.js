"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TenantCountAggregate_1 = require("../outputs/TenantCountAggregate");
const TenantMaxAggregate_1 = require("../outputs/TenantMaxAggregate");
const TenantMinAggregate_1 = require("../outputs/TenantMinAggregate");
let TenantGroupBy = class TenantGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantGroupBy.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantGroupBy.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantGroupBy.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantGroupBy.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TenantGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TenantGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCountAggregate_1.TenantCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCountAggregate_1.TenantCountAggregate)
], TenantGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantMinAggregate_1.TenantMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantMinAggregate_1.TenantMinAggregate)
], TenantGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantMaxAggregate_1.TenantMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantMaxAggregate_1.TenantMaxAggregate)
], TenantGroupBy.prototype, "_max", void 0);
TenantGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TenantGroupBy", {
        isAbstract: true
    })
], TenantGroupBy);
exports.TenantGroupBy = TenantGroupBy;
