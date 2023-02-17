"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPAYMENT_METHODWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPAYMENT_METHODFilter_1 = require("../inputs/NestedEnumPAYMENT_METHODFilter");
const NestedEnumPAYMENT_METHODWithAggregatesFilter_1 = require("../inputs/NestedEnumPAYMENT_METHODWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PAYMENT_METHOD_1 = require("../../enums/PAYMENT_METHOD");
let EnumPAYMENT_METHODWithAggregatesFilter = class EnumPAYMENT_METHODWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_METHOD_1.PAYMENT_METHOD, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPAYMENT_METHODWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_METHOD_1.PAYMENT_METHOD], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_METHODWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_METHOD_1.PAYMENT_METHOD], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_METHODWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_METHODWithAggregatesFilter_1.NestedEnumPAYMENT_METHODWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_METHODWithAggregatesFilter_1.NestedEnumPAYMENT_METHODWithAggregatesFilter)
], EnumPAYMENT_METHODWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPAYMENT_METHODWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_METHODFilter_1.NestedEnumPAYMENT_METHODFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_METHODFilter_1.NestedEnumPAYMENT_METHODFilter)
], EnumPAYMENT_METHODWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_METHODFilter_1.NestedEnumPAYMENT_METHODFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_METHODFilter_1.NestedEnumPAYMENT_METHODFilter)
], EnumPAYMENT_METHODWithAggregatesFilter.prototype, "_max", void 0);
EnumPAYMENT_METHODWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPAYMENT_METHODWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPAYMENT_METHODWithAggregatesFilter);
exports.EnumPAYMENT_METHODWithAggregatesFilter = EnumPAYMENT_METHODWithAggregatesFilter;
