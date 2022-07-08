"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumREQUEST_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumREQUEST_TYPEFilter_1 = require("../inputs/NestedEnumREQUEST_TYPEFilter");
const NestedEnumREQUEST_TYPEWithAggregatesFilter_1 = require("../inputs/NestedEnumREQUEST_TYPEWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const REQUEST_TYPE_1 = require("../../enums/REQUEST_TYPE");
let EnumREQUEST_TYPEWithAggregatesFilter = class EnumREQUEST_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_TYPE_1.REQUEST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumREQUEST_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_TYPE_1.REQUEST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREQUEST_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REQUEST_TYPE_1.REQUEST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREQUEST_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_TYPEWithAggregatesFilter_1.NestedEnumREQUEST_TYPEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_TYPEWithAggregatesFilter_1.NestedEnumREQUEST_TYPEWithAggregatesFilter)
], EnumREQUEST_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumREQUEST_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_TYPEFilter_1.NestedEnumREQUEST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_TYPEFilter_1.NestedEnumREQUEST_TYPEFilter)
], EnumREQUEST_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREQUEST_TYPEFilter_1.NestedEnumREQUEST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREQUEST_TYPEFilter_1.NestedEnumREQUEST_TYPEFilter)
], EnumREQUEST_TYPEWithAggregatesFilter.prototype, "_max", void 0);
EnumREQUEST_TYPEWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumREQUEST_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], EnumREQUEST_TYPEWithAggregatesFilter);
exports.EnumREQUEST_TYPEWithAggregatesFilter = EnumREQUEST_TYPEWithAggregatesFilter;
