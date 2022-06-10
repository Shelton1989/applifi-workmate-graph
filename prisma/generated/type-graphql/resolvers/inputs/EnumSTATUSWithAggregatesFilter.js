"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSTATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSTATUSFilter_1 = require("../inputs/NestedEnumSTATUSFilter");
const NestedEnumSTATUSWithAggregatesFilter_1 = require("../inputs/NestedEnumSTATUSWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const STATUS_1 = require("../../enums/STATUS");
let EnumSTATUSWithAggregatesFilter = class EnumSTATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSTATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [STATUS_1.STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSTATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [STATUS_1.STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSTATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSTATUSWithAggregatesFilter_1.NestedEnumSTATUSWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSTATUSWithAggregatesFilter_1.NestedEnumSTATUSWithAggregatesFilter)
], EnumSTATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumSTATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSTATUSFilter_1.NestedEnumSTATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSTATUSFilter_1.NestedEnumSTATUSFilter)
], EnumSTATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSTATUSFilter_1.NestedEnumSTATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSTATUSFilter_1.NestedEnumSTATUSFilter)
], EnumSTATUSWithAggregatesFilter.prototype, "_max", void 0);
EnumSTATUSWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSTATUSWithAggregatesFilter", {
        isAbstract: true
    })
], EnumSTATUSWithAggregatesFilter);
exports.EnumSTATUSWithAggregatesFilter = EnumSTATUSWithAggregatesFilter;
