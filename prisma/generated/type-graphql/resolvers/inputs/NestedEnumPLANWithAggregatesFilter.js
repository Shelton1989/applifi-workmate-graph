"use strict";
var NestedEnumPLANWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPLANWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPLANFilter_1 = require("../inputs/NestedEnumPLANFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PLAN_1 = require("../../enums/PLAN");
let NestedEnumPLANWithAggregatesFilter = NestedEnumPLANWithAggregatesFilter_1 = class NestedEnumPLANWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PLAN_1.PLAN, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPLANWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PLAN_1.PLAN], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPLANWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PLAN_1.PLAN], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPLANWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPLANWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPLANWithAggregatesFilter)
], NestedEnumPLANWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumPLANWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPLANFilter_1.NestedEnumPLANFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPLANFilter_1.NestedEnumPLANFilter)
], NestedEnumPLANWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPLANFilter_1.NestedEnumPLANFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPLANFilter_1.NestedEnumPLANFilter)
], NestedEnumPLANWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPLANWithAggregatesFilter = NestedEnumPLANWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPLANWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPLANWithAggregatesFilter);
exports.NestedEnumPLANWithAggregatesFilter = NestedEnumPLANWithAggregatesFilter;
