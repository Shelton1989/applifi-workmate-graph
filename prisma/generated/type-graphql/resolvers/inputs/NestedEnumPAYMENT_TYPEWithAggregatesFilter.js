"use strict";
var NestedEnumPAYMENT_TYPEWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPAYMENT_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumPAYMENT_TYPEFilter_1 = require("../inputs/NestedEnumPAYMENT_TYPEFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PAYMENT_TYPE_1 = require("../../enums/PAYMENT_TYPE");
let NestedEnumPAYMENT_TYPEWithAggregatesFilter = NestedEnumPAYMENT_TYPEWithAggregatesFilter_1 = class NestedEnumPAYMENT_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_TYPE_1.PAYMENT_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumPAYMENT_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_TYPE_1.PAYMENT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PAYMENT_TYPE_1.PAYMENT_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumPAYMENT_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_TYPEWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_TYPEWithAggregatesFilter)
], NestedEnumPAYMENT_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumPAYMENT_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_TYPEFilter_1.NestedEnumPAYMENT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_TYPEFilter_1.NestedEnumPAYMENT_TYPEFilter)
], NestedEnumPAYMENT_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumPAYMENT_TYPEFilter_1.NestedEnumPAYMENT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumPAYMENT_TYPEFilter_1.NestedEnumPAYMENT_TYPEFilter)
], NestedEnumPAYMENT_TYPEWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPAYMENT_TYPEWithAggregatesFilter = NestedEnumPAYMENT_TYPEWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumPAYMENT_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPAYMENT_TYPEWithAggregatesFilter);
exports.NestedEnumPAYMENT_TYPEWithAggregatesFilter = NestedEnumPAYMENT_TYPEWithAggregatesFilter;
