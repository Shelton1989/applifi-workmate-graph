"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumLIST_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumLIST_TYPEFilter_1 = require("../inputs/NestedEnumLIST_TYPEFilter");
const NestedEnumLIST_TYPEWithAggregatesFilter_1 = require("../inputs/NestedEnumLIST_TYPEWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const LIST_TYPE_1 = require("../../enums/LIST_TYPE");
let EnumLIST_TYPEWithAggregatesFilter = class EnumLIST_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LIST_TYPE_1.LIST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumLIST_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LIST_TYPE_1.LIST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLIST_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LIST_TYPE_1.LIST_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumLIST_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLIST_TYPEWithAggregatesFilter_1.NestedEnumLIST_TYPEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLIST_TYPEWithAggregatesFilter_1.NestedEnumLIST_TYPEWithAggregatesFilter)
], EnumLIST_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumLIST_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLIST_TYPEFilter_1.NestedEnumLIST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLIST_TYPEFilter_1.NestedEnumLIST_TYPEFilter)
], EnumLIST_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumLIST_TYPEFilter_1.NestedEnumLIST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumLIST_TYPEFilter_1.NestedEnumLIST_TYPEFilter)
], EnumLIST_TYPEWithAggregatesFilter.prototype, "_max", void 0);
EnumLIST_TYPEWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumLIST_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], EnumLIST_TYPEWithAggregatesFilter);
exports.EnumLIST_TYPEWithAggregatesFilter = EnumLIST_TYPEWithAggregatesFilter;
