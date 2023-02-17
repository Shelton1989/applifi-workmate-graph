"use strict";
var NestedEnumPAYMENT_METHODWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPAYMENT_METHODWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPAYMENT_METHODFilter_1 = require("../inputs/NestedEnumPAYMENT_METHODFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PAYMENT_METHOD_1 = require("../../enums/PAYMENT_METHOD");
let NestedEnumPAYMENT_METHODWithAggregatesFilter = NestedEnumPAYMENT_METHODWithAggregatesFilter_1 = class NestedEnumPAYMENT_METHODWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_METHOD_1.PAYMENT_METHOD, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPAYMENT_METHODWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_METHOD_1.PAYMENT_METHOD], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_METHODWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_METHOD_1.PAYMENT_METHOD], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_METHODWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_METHODWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_METHODWithAggregatesFilter)
], NestedEnumPAYMENT_METHODWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumPAYMENT_METHODWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_METHODFilter_1.NestedEnumPAYMENT_METHODFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_METHODFilter_1.NestedEnumPAYMENT_METHODFilter)
], NestedEnumPAYMENT_METHODWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_METHODFilter_1.NestedEnumPAYMENT_METHODFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_METHODFilter_1.NestedEnumPAYMENT_METHODFilter)
], NestedEnumPAYMENT_METHODWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPAYMENT_METHODWithAggregatesFilter = NestedEnumPAYMENT_METHODWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPAYMENT_METHODWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPAYMENT_METHODWithAggregatesFilter);
exports.NestedEnumPAYMENT_METHODWithAggregatesFilter = NestedEnumPAYMENT_METHODWithAggregatesFilter;
