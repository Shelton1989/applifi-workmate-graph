"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPLANWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPLANFilter_1 = require("../inputs/NestedEnumPLANFilter");
const NestedEnumPLANWithAggregatesFilter_1 = require("../inputs/NestedEnumPLANWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PLAN_1 = require("../../enums/PLAN");
let EnumPLANWithAggregatesFilter = class EnumPLANWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPLANWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PLAN_1.PLAN], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPLANWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PLAN_1.PLAN], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPLANWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPLANWithAggregatesFilter_1.NestedEnumPLANWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPLANWithAggregatesFilter_1.NestedEnumPLANWithAggregatesFilter)
], EnumPLANWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPLANWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPLANFilter_1.NestedEnumPLANFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPLANFilter_1.NestedEnumPLANFilter)
], EnumPLANWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPLANFilter_1.NestedEnumPLANFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPLANFilter_1.NestedEnumPLANFilter)
], EnumPLANWithAggregatesFilter.prototype, "_max", void 0);
EnumPLANWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPLANWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPLANWithAggregatesFilter);
exports.EnumPLANWithAggregatesFilter = EnumPLANWithAggregatesFilter;
