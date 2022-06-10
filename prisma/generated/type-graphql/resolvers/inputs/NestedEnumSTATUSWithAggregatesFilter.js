"use strict";
var NestedEnumSTATUSWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumSTATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSTATUSFilter_1 = require("../inputs/NestedEnumSTATUSFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const STATUS_1 = require("../../enums/STATUS");
let NestedEnumSTATUSWithAggregatesFilter = NestedEnumSTATUSWithAggregatesFilter_1 = class NestedEnumSTATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [STATUS_1.STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [STATUS_1.STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSTATUSWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSTATUSWithAggregatesFilter)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSTATUSFilter_1.NestedEnumSTATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSTATUSFilter_1.NestedEnumSTATUSFilter)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSTATUSFilter_1.NestedEnumSTATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSTATUSFilter_1.NestedEnumSTATUSFilter)
], NestedEnumSTATUSWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumSTATUSWithAggregatesFilter = NestedEnumSTATUSWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumSTATUSWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumSTATUSWithAggregatesFilter);
exports.NestedEnumSTATUSWithAggregatesFilter = NestedEnumSTATUSWithAggregatesFilter;
