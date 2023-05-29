"use strict";
var NestedEnumBILLING_STATUSWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumBILLING_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumBILLING_STATUSFilter_1 = require("../inputs/NestedEnumBILLING_STATUSFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
let NestedEnumBILLING_STATUSWithAggregatesFilter = NestedEnumBILLING_STATUSWithAggregatesFilter_1 = class NestedEnumBILLING_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumBILLING_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BILLING_STATUS_1.BILLING_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBILLING_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BILLING_STATUS_1.BILLING_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBILLING_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBILLING_STATUSWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBILLING_STATUSWithAggregatesFilter)
], NestedEnumBILLING_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumBILLING_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBILLING_STATUSFilter_1.NestedEnumBILLING_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBILLING_STATUSFilter_1.NestedEnumBILLING_STATUSFilter)
], NestedEnumBILLING_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBILLING_STATUSFilter_1.NestedEnumBILLING_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBILLING_STATUSFilter_1.NestedEnumBILLING_STATUSFilter)
], NestedEnumBILLING_STATUSWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumBILLING_STATUSWithAggregatesFilter = NestedEnumBILLING_STATUSWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumBILLING_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumBILLING_STATUSWithAggregatesFilter);
exports.NestedEnumBILLING_STATUSWithAggregatesFilter = NestedEnumBILLING_STATUSWithAggregatesFilter;
