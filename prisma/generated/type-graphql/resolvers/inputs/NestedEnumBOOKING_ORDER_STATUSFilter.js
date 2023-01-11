"use strict";
var NestedEnumBOOKING_ORDER_STATUSFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumBOOKING_ORDER_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
let NestedEnumBOOKING_ORDER_STATUSFilter = NestedEnumBOOKING_ORDER_STATUSFilter_1 = class NestedEnumBOOKING_ORDER_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumBOOKING_ORDER_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBOOKING_ORDER_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBOOKING_ORDER_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBOOKING_ORDER_STATUSFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBOOKING_ORDER_STATUSFilter)
], NestedEnumBOOKING_ORDER_STATUSFilter.prototype, "not", void 0);
NestedEnumBOOKING_ORDER_STATUSFilter = NestedEnumBOOKING_ORDER_STATUSFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumBOOKING_ORDER_STATUSFilter", {
        isAbstract: true
    })
], NestedEnumBOOKING_ORDER_STATUSFilter);
exports.NestedEnumBOOKING_ORDER_STATUSFilter = NestedEnumBOOKING_ORDER_STATUSFilter;
