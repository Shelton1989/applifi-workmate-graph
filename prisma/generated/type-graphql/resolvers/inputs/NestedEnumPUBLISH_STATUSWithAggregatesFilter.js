"use strict";
var NestedEnumPUBLISH_STATUSWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPUBLISH_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPUBLISH_STATUSFilter_1 = require("../inputs/NestedEnumPUBLISH_STATUSFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let NestedEnumPUBLISH_STATUSWithAggregatesFilter = NestedEnumPUBLISH_STATUSWithAggregatesFilter_1 = class NestedEnumPUBLISH_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPUBLISH_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PUBLISH_STATUS_1.PUBLISH_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPUBLISH_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PUBLISH_STATUS_1.PUBLISH_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPUBLISH_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPUBLISH_STATUSWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPUBLISH_STATUSWithAggregatesFilter)
], NestedEnumPUBLISH_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumPUBLISH_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPUBLISH_STATUSFilter_1.NestedEnumPUBLISH_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPUBLISH_STATUSFilter_1.NestedEnumPUBLISH_STATUSFilter)
], NestedEnumPUBLISH_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPUBLISH_STATUSFilter_1.NestedEnumPUBLISH_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPUBLISH_STATUSFilter_1.NestedEnumPUBLISH_STATUSFilter)
], NestedEnumPUBLISH_STATUSWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPUBLISH_STATUSWithAggregatesFilter = NestedEnumPUBLISH_STATUSWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPUBLISH_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPUBLISH_STATUSWithAggregatesFilter);
exports.NestedEnumPUBLISH_STATUSWithAggregatesFilter = NestedEnumPUBLISH_STATUSWithAggregatesFilter;
