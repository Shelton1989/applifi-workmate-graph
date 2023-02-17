"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPAYMENT_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPAYMENT_TYPEFilter_1 = require("../inputs/NestedEnumPAYMENT_TYPEFilter");
const NestedEnumPAYMENT_TYPEWithAggregatesFilter_1 = require("../inputs/NestedEnumPAYMENT_TYPEWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PAYMENT_TYPE_1 = require("../../enums/PAYMENT_TYPE");
let EnumPAYMENT_TYPEWithAggregatesFilter = class EnumPAYMENT_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_TYPE_1.PAYMENT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPAYMENT_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_TYPE_1.PAYMENT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_TYPE_1.PAYMENT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumPAYMENT_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_TYPEWithAggregatesFilter_1.NestedEnumPAYMENT_TYPEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_TYPEWithAggregatesFilter_1.NestedEnumPAYMENT_TYPEWithAggregatesFilter)
], EnumPAYMENT_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPAYMENT_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_TYPEFilter_1.NestedEnumPAYMENT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_TYPEFilter_1.NestedEnumPAYMENT_TYPEFilter)
], EnumPAYMENT_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_TYPEFilter_1.NestedEnumPAYMENT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_TYPEFilter_1.NestedEnumPAYMENT_TYPEFilter)
], EnumPAYMENT_TYPEWithAggregatesFilter.prototype, "_max", void 0);
EnumPAYMENT_TYPEWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPAYMENT_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPAYMENT_TYPEWithAggregatesFilter);
exports.EnumPAYMENT_TYPEWithAggregatesFilter = EnumPAYMENT_TYPEWithAggregatesFilter;
