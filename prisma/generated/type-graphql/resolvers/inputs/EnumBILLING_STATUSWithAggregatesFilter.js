"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBILLING_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumBILLING_STATUSFilter_1 = require("../inputs/NestedEnumBILLING_STATUSFilter");
const NestedEnumBILLING_STATUSWithAggregatesFilter_1 = require("../inputs/NestedEnumBILLING_STATUSWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
let EnumBILLING_STATUSWithAggregatesFilter = class EnumBILLING_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumBILLING_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BILLING_STATUS_1.BILLING_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumBILLING_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BILLING_STATUS_1.BILLING_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumBILLING_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBILLING_STATUSWithAggregatesFilter_1.NestedEnumBILLING_STATUSWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBILLING_STATUSWithAggregatesFilter_1.NestedEnumBILLING_STATUSWithAggregatesFilter)
], EnumBILLING_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumBILLING_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBILLING_STATUSFilter_1.NestedEnumBILLING_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBILLING_STATUSFilter_1.NestedEnumBILLING_STATUSFilter)
], EnumBILLING_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBILLING_STATUSFilter_1.NestedEnumBILLING_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBILLING_STATUSFilter_1.NestedEnumBILLING_STATUSFilter)
], EnumBILLING_STATUSWithAggregatesFilter.prototype, "_max", void 0);
EnumBILLING_STATUSWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumBILLING_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], EnumBILLING_STATUSWithAggregatesFilter);
exports.EnumBILLING_STATUSWithAggregatesFilter = EnumBILLING_STATUSWithAggregatesFilter;
