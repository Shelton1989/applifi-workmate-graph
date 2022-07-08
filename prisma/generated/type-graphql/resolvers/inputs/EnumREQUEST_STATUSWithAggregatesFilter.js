"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumREQUEST_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumREQUEST_STATUSFilter_1 = require("../inputs/NestedEnumREQUEST_STATUSFilter");
const NestedEnumREQUEST_STATUSWithAggregatesFilter_1 = require("../inputs/NestedEnumREQUEST_STATUSWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const REQUEST_STATUS_1 = require("../../enums/REQUEST_STATUS");
let EnumREQUEST_STATUSWithAggregatesFilter = class EnumREQUEST_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_STATUS_1.REQUEST_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumREQUEST_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_STATUS_1.REQUEST_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREQUEST_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_STATUS_1.REQUEST_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREQUEST_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_STATUSWithAggregatesFilter_1.NestedEnumREQUEST_STATUSWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_STATUSWithAggregatesFilter_1.NestedEnumREQUEST_STATUSWithAggregatesFilter)
], EnumREQUEST_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumREQUEST_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_STATUSFilter_1.NestedEnumREQUEST_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_STATUSFilter_1.NestedEnumREQUEST_STATUSFilter)
], EnumREQUEST_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_STATUSFilter_1.NestedEnumREQUEST_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_STATUSFilter_1.NestedEnumREQUEST_STATUSFilter)
], EnumREQUEST_STATUSWithAggregatesFilter.prototype, "_max", void 0);
EnumREQUEST_STATUSWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumREQUEST_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], EnumREQUEST_STATUSWithAggregatesFilter);
exports.EnumREQUEST_STATUSWithAggregatesFilter = EnumREQUEST_STATUSWithAggregatesFilter;
