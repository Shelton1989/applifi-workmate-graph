"use strict";
var NestedEnumBILLING_STATUSFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumBILLING_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
let NestedEnumBILLING_STATUSFilter = NestedEnumBILLING_STATUSFilter_1 = class NestedEnumBILLING_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumBILLING_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BILLING_STATUS_1.BILLING_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBILLING_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BILLING_STATUS_1.BILLING_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumBILLING_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumBILLING_STATUSFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumBILLING_STATUSFilter)
], NestedEnumBILLING_STATUSFilter.prototype, "not", void 0);
NestedEnumBILLING_STATUSFilter = NestedEnumBILLING_STATUSFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumBILLING_STATUSFilter", {
        isAbstract: true
    })
], NestedEnumBILLING_STATUSFilter);
exports.NestedEnumBILLING_STATUSFilter = NestedEnumBILLING_STATUSFilter;
