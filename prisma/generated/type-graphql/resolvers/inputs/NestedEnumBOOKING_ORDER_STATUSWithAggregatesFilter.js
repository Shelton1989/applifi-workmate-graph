"use strict";
var NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumBOOKING_ORDER_STATUSFilter_1 = require("../inputs/NestedEnumBOOKING_ORDER_STATUSFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
let NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter = NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter_1 = class NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter)
], NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBOOKING_ORDER_STATUSFilter_1.NestedEnumBOOKING_ORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBOOKING_ORDER_STATUSFilter_1.NestedEnumBOOKING_ORDER_STATUSFilter)
], NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBOOKING_ORDER_STATUSFilter_1.NestedEnumBOOKING_ORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBOOKING_ORDER_STATUSFilter_1.NestedEnumBOOKING_ORDER_STATUSFilter)
], NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter = NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter);
exports.NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter = NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter;
