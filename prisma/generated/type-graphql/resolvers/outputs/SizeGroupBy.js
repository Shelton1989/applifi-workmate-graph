"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SizeCountAggregate_1 = require("../outputs/SizeCountAggregate");
const SizeMaxAggregate_1 = require("../outputs/SizeMaxAggregate");
const SizeMinAggregate_1 = require("../outputs/SizeMinAggregate");
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let SizeGroupBy = class SizeGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeGroupBy.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SizeGroupBy.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SizeGroupBy.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SizeGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SizeGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCountAggregate_1.SizeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCountAggregate_1.SizeCountAggregate)
], SizeGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeMinAggregate_1.SizeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeMinAggregate_1.SizeMinAggregate)
], SizeGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeMaxAggregate_1.SizeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeMaxAggregate_1.SizeMaxAggregate)
], SizeGroupBy.prototype, "_max", void 0);
SizeGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SizeGroupBy", {
        isAbstract: true
    })
], SizeGroupBy);
exports.SizeGroupBy = SizeGroupBy;
