"use strict";
var NestedEnumTOPIC_TYPEWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTOPIC_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumTOPIC_TYPEFilter_1 = require("../inputs/NestedEnumTOPIC_TYPEFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const TOPIC_TYPE_1 = require("../../enums/TOPIC_TYPE");
let NestedEnumTOPIC_TYPEWithAggregatesFilter = NestedEnumTOPIC_TYPEWithAggregatesFilter_1 = class NestedEnumTOPIC_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumTOPIC_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TOPIC_TYPE_1.TOPIC_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTOPIC_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TOPIC_TYPE_1.TOPIC_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTOPIC_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTOPIC_TYPEWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTOPIC_TYPEWithAggregatesFilter)
], NestedEnumTOPIC_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumTOPIC_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTOPIC_TYPEFilter_1.NestedEnumTOPIC_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTOPIC_TYPEFilter_1.NestedEnumTOPIC_TYPEFilter)
], NestedEnumTOPIC_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTOPIC_TYPEFilter_1.NestedEnumTOPIC_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTOPIC_TYPEFilter_1.NestedEnumTOPIC_TYPEFilter)
], NestedEnumTOPIC_TYPEWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumTOPIC_TYPEWithAggregatesFilter = NestedEnumTOPIC_TYPEWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumTOPIC_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumTOPIC_TYPEWithAggregatesFilter);
exports.NestedEnumTOPIC_TYPEWithAggregatesFilter = NestedEnumTOPIC_TYPEWithAggregatesFilter;
