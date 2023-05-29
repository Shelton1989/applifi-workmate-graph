"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBILLING_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumBILLING_STATUSFilter_1 = require("../inputs/NestedEnumBILLING_STATUSFilter");
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
let EnumBILLING_STATUSFilter = class EnumBILLING_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumBILLING_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BILLING_STATUS_1.BILLING_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumBILLING_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BILLING_STATUS_1.BILLING_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumBILLING_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBILLING_STATUSFilter_1.NestedEnumBILLING_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBILLING_STATUSFilter_1.NestedEnumBILLING_STATUSFilter)
], EnumBILLING_STATUSFilter.prototype, "not", void 0);
EnumBILLING_STATUSFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumBILLING_STATUSFilter", {
        isAbstract: true
    })
], EnumBILLING_STATUSFilter);
exports.EnumBILLING_STATUSFilter = EnumBILLING_STATUSFilter;
