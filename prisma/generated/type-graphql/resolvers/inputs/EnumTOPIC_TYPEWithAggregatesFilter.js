"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTOPIC_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTOPIC_TYPEFilter_1 = require("../inputs/NestedEnumTOPIC_TYPEFilter");
const NestedEnumTOPIC_TYPEWithAggregatesFilter_1 = require("../inputs/NestedEnumTOPIC_TYPEWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const TOPIC_TYPE_1 = require("../../enums/TOPIC_TYPE");
let EnumTOPIC_TYPEWithAggregatesFilter = class EnumTOPIC_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumTOPIC_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TOPIC_TYPE_1.TOPIC_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTOPIC_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TOPIC_TYPE_1.TOPIC_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumTOPIC_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTOPIC_TYPEWithAggregatesFilter_1.NestedEnumTOPIC_TYPEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTOPIC_TYPEWithAggregatesFilter_1.NestedEnumTOPIC_TYPEWithAggregatesFilter)
], EnumTOPIC_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumTOPIC_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTOPIC_TYPEFilter_1.NestedEnumTOPIC_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTOPIC_TYPEFilter_1.NestedEnumTOPIC_TYPEFilter)
], EnumTOPIC_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTOPIC_TYPEFilter_1.NestedEnumTOPIC_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTOPIC_TYPEFilter_1.NestedEnumTOPIC_TYPEFilter)
], EnumTOPIC_TYPEWithAggregatesFilter.prototype, "_max", void 0);
EnumTOPIC_TYPEWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumTOPIC_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], EnumTOPIC_TYPEWithAggregatesFilter);
exports.EnumTOPIC_TYPEWithAggregatesFilter = EnumTOPIC_TYPEWithAggregatesFilter;
