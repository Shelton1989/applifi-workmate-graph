"use strict";
var NestedEnumPAYMENT_STATUSWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPAYMENT_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPAYMENT_STATUSFilter_1 = require("../inputs/NestedEnumPAYMENT_STATUSFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PAYMENT_STATUS_1 = require("../../enums/PAYMENT_STATUS");
let NestedEnumPAYMENT_STATUSWithAggregatesFilter = NestedEnumPAYMENT_STATUSWithAggregatesFilter_1 = class NestedEnumPAYMENT_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_STATUS_1.PAYMENT_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPAYMENT_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_STATUS_1.PAYMENT_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_STATUS_1.PAYMENT_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_STATUSWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_STATUSWithAggregatesFilter)
], NestedEnumPAYMENT_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumPAYMENT_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_STATUSFilter_1.NestedEnumPAYMENT_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_STATUSFilter_1.NestedEnumPAYMENT_STATUSFilter)
], NestedEnumPAYMENT_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_STATUSFilter_1.NestedEnumPAYMENT_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_STATUSFilter_1.NestedEnumPAYMENT_STATUSFilter)
], NestedEnumPAYMENT_STATUSWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPAYMENT_STATUSWithAggregatesFilter = NestedEnumPAYMENT_STATUSWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPAYMENT_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPAYMENT_STATUSWithAggregatesFilter);
exports.NestedEnumPAYMENT_STATUSWithAggregatesFilter = NestedEnumPAYMENT_STATUSWithAggregatesFilter;
