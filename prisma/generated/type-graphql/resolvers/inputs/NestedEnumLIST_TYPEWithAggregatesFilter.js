"use strict";
var NestedEnumLIST_TYPEWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumLIST_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumLIST_TYPEFilter_1 = require("../inputs/NestedEnumLIST_TYPEFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const LIST_TYPE_1 = require("../../enums/LIST_TYPE");
let NestedEnumLIST_TYPEWithAggregatesFilter = NestedEnumLIST_TYPEWithAggregatesFilter_1 = class NestedEnumLIST_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LIST_TYPE_1.LIST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumLIST_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LIST_TYPE_1.LIST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumLIST_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LIST_TYPE_1.LIST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumLIST_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLIST_TYPEWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLIST_TYPEWithAggregatesFilter)
], NestedEnumLIST_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumLIST_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLIST_TYPEFilter_1.NestedEnumLIST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLIST_TYPEFilter_1.NestedEnumLIST_TYPEFilter)
], NestedEnumLIST_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLIST_TYPEFilter_1.NestedEnumLIST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLIST_TYPEFilter_1.NestedEnumLIST_TYPEFilter)
], NestedEnumLIST_TYPEWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumLIST_TYPEWithAggregatesFilter = NestedEnumLIST_TYPEWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumLIST_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumLIST_TYPEWithAggregatesFilter);
exports.NestedEnumLIST_TYPEWithAggregatesFilter = NestedEnumLIST_TYPEWithAggregatesFilter;
