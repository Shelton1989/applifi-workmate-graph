"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPUBLISH_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPUBLISH_STATUSFilter_1 = require("../inputs/NestedEnumPUBLISH_STATUSFilter");
const NestedEnumPUBLISH_STATUSWithAggregatesFilter_1 = require("../inputs/NestedEnumPUBLISH_STATUSWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let EnumPUBLISH_STATUSWithAggregatesFilter = class EnumPUBLISH_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPUBLISH_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PUBLISH_STATUS_1.PUBLISH_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPUBLISH_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PUBLISH_STATUS_1.PUBLISH_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPUBLISH_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPUBLISH_STATUSWithAggregatesFilter_1.NestedEnumPUBLISH_STATUSWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPUBLISH_STATUSWithAggregatesFilter_1.NestedEnumPUBLISH_STATUSWithAggregatesFilter)
], EnumPUBLISH_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPUBLISH_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPUBLISH_STATUSFilter_1.NestedEnumPUBLISH_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPUBLISH_STATUSFilter_1.NestedEnumPUBLISH_STATUSFilter)
], EnumPUBLISH_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPUBLISH_STATUSFilter_1.NestedEnumPUBLISH_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPUBLISH_STATUSFilter_1.NestedEnumPUBLISH_STATUSFilter)
], EnumPUBLISH_STATUSWithAggregatesFilter.prototype, "_max", void 0);
EnumPUBLISH_STATUSWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPUBLISH_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPUBLISH_STATUSWithAggregatesFilter);
exports.EnumPUBLISH_STATUSWithAggregatesFilter = EnumPUBLISH_STATUSWithAggregatesFilter;
