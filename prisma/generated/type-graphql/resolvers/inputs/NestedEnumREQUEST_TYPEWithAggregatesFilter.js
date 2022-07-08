"use strict";
var NestedEnumREQUEST_TYPEWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumREQUEST_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumREQUEST_TYPEFilter_1 = require("../inputs/NestedEnumREQUEST_TYPEFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const REQUEST_TYPE_1 = require("../../enums/REQUEST_TYPE");
let NestedEnumREQUEST_TYPEWithAggregatesFilter = NestedEnumREQUEST_TYPEWithAggregatesFilter_1 = class NestedEnumREQUEST_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_TYPE_1.REQUEST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumREQUEST_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_TYPE_1.REQUEST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREQUEST_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_TYPE_1.REQUEST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREQUEST_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_TYPEWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_TYPEWithAggregatesFilter)
], NestedEnumREQUEST_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumREQUEST_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_TYPEFilter_1.NestedEnumREQUEST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_TYPEFilter_1.NestedEnumREQUEST_TYPEFilter)
], NestedEnumREQUEST_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_TYPEFilter_1.NestedEnumREQUEST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_TYPEFilter_1.NestedEnumREQUEST_TYPEFilter)
], NestedEnumREQUEST_TYPEWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumREQUEST_TYPEWithAggregatesFilter = NestedEnumREQUEST_TYPEWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumREQUEST_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumREQUEST_TYPEWithAggregatesFilter);
exports.NestedEnumREQUEST_TYPEWithAggregatesFilter = NestedEnumREQUEST_TYPEWithAggregatesFilter;
