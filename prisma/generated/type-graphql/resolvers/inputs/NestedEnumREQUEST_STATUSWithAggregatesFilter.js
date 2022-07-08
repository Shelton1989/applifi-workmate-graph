"use strict";
var NestedEnumREQUEST_STATUSWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumREQUEST_STATUSWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumREQUEST_STATUSFilter_1 = require("../inputs/NestedEnumREQUEST_STATUSFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const REQUEST_STATUS_1 = require("../../enums/REQUEST_STATUS");
let NestedEnumREQUEST_STATUSWithAggregatesFilter = NestedEnumREQUEST_STATUSWithAggregatesFilter_1 = class NestedEnumREQUEST_STATUSWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_STATUS_1.REQUEST_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumREQUEST_STATUSWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_STATUS_1.REQUEST_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREQUEST_STATUSWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_STATUS_1.REQUEST_STATUS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREQUEST_STATUSWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_STATUSWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_STATUSWithAggregatesFilter)
], NestedEnumREQUEST_STATUSWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumREQUEST_STATUSWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_STATUSFilter_1.NestedEnumREQUEST_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_STATUSFilter_1.NestedEnumREQUEST_STATUSFilter)
], NestedEnumREQUEST_STATUSWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_STATUSFilter_1.NestedEnumREQUEST_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_STATUSFilter_1.NestedEnumREQUEST_STATUSFilter)
], NestedEnumREQUEST_STATUSWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumREQUEST_STATUSWithAggregatesFilter = NestedEnumREQUEST_STATUSWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumREQUEST_STATUSWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumREQUEST_STATUSWithAggregatesFilter);
exports.NestedEnumREQUEST_STATUSWithAggregatesFilter = NestedEnumREQUEST_STATUSWithAggregatesFilter;
