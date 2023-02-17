"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPAYMENT_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPAYMENT_STATUSFilter_1 = require("../inputs/NestedEnumPAYMENT_STATUSFilter");
const NestedEnumPAYMENT_STATUSWithAggregatesFilter_1 = require("../inputs/NestedEnumPAYMENT_STATUSWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PAYMENT_STATUS_1 = require("../../enums/PAYMENT_STATUS");
let EnumPAYMENT_STATUSWithAggregatesFilter = class EnumPAYMENT_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_STATUS_1.PAYMENT_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPAYMENT_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_STATUS_1.PAYMENT_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_STATUS_1.PAYMENT_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_STATUSWithAggregatesFilter_1.NestedEnumPAYMENT_STATUSWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_STATUSWithAggregatesFilter_1.NestedEnumPAYMENT_STATUSWithAggregatesFilter)
], EnumPAYMENT_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPAYMENT_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_STATUSFilter_1.NestedEnumPAYMENT_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_STATUSFilter_1.NestedEnumPAYMENT_STATUSFilter)
], EnumPAYMENT_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_STATUSFilter_1.NestedEnumPAYMENT_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_STATUSFilter_1.NestedEnumPAYMENT_STATUSFilter)
], EnumPAYMENT_STATUSWithAggregatesFilter.prototype, "_max", void 0);
EnumPAYMENT_STATUSWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPAYMENT_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPAYMENT_STATUSWithAggregatesFilter);
exports.EnumPAYMENT_STATUSWithAggregatesFilter = EnumPAYMENT_STATUSWithAggregatesFilter;
