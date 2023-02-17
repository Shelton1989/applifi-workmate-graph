"use strict";
var NestedEnumPAYMENT_STATUSFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPAYMENT_STATUSFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PAYMENT_STATUS_1 = require("../../enums/PAYMENT_STATUS");
let NestedEnumPAYMENT_STATUSFilter = NestedEnumPAYMENT_STATUSFilter_1 = class NestedEnumPAYMENT_STATUSFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_STATUS_1.PAYMENT_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPAYMENT_STATUSFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_STATUS_1.PAYMENT_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_STATUSFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_STATUS_1.PAYMENT_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_STATUSFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_STATUSFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_STATUSFilter)
], NestedEnumPAYMENT_STATUSFilter.prototype, "not", void 0);
NestedEnumPAYMENT_STATUSFilter = NestedEnumPAYMENT_STATUSFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPAYMENT_STATUSFilter", {
        isAbstract: true
    })
], NestedEnumPAYMENT_STATUSFilter);
exports.NestedEnumPAYMENT_STATUSFilter = NestedEnumPAYMENT_STATUSFilter;
