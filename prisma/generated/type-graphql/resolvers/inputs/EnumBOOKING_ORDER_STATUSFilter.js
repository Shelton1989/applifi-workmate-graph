"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBOOKING_ORDER_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumBOOKING_ORDER_STATUSFilter_1 = require("../inputs/NestedEnumBOOKING_ORDER_STATUSFilter");
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
let EnumBOOKING_ORDER_STATUSFilter = class EnumBOOKING_ORDER_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumBOOKING_ORDER_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumBOOKING_ORDER_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumBOOKING_ORDER_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBOOKING_ORDER_STATUSFilter_1.NestedEnumBOOKING_ORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBOOKING_ORDER_STATUSFilter_1.NestedEnumBOOKING_ORDER_STATUSFilter)
], EnumBOOKING_ORDER_STATUSFilter.prototype, "not", void 0);
EnumBOOKING_ORDER_STATUSFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumBOOKING_ORDER_STATUSFilter", {
        isAbstract: true
    })
], EnumBOOKING_ORDER_STATUSFilter);
exports.EnumBOOKING_ORDER_STATUSFilter = EnumBOOKING_ORDER_STATUSFilter;
