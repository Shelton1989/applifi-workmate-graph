"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPAYMENT_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPAYMENT_STATUSFilter_1 = require("../inputs/NestedEnumPAYMENT_STATUSFilter");
const PAYMENT_STATUS_1 = require("../../enums/PAYMENT_STATUS");
let EnumPAYMENT_STATUSFilter = class EnumPAYMENT_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_STATUS_1.PAYMENT_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPAYMENT_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_STATUS_1.PAYMENT_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_STATUS_1.PAYMENT_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_STATUSFilter_1.NestedEnumPAYMENT_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_STATUSFilter_1.NestedEnumPAYMENT_STATUSFilter)
], EnumPAYMENT_STATUSFilter.prototype, "not", void 0);
EnumPAYMENT_STATUSFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPAYMENT_STATUSFilter", {
        isAbstract: true
    })
], EnumPAYMENT_STATUSFilter);
exports.EnumPAYMENT_STATUSFilter = EnumPAYMENT_STATUSFilter;
