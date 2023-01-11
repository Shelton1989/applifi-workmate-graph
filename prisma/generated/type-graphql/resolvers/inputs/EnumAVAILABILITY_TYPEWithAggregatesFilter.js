"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAVAILABILITY_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumAVAILABILITY_TYPEFilter_1 = require("../inputs/NestedEnumAVAILABILITY_TYPEFilter");
const NestedEnumAVAILABILITY_TYPEWithAggregatesFilter_1 = require("../inputs/NestedEnumAVAILABILITY_TYPEWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const AVAILABILITY_TYPE_1 = require("../../enums/AVAILABILITY_TYPE");
let EnumAVAILABILITY_TYPEWithAggregatesFilter = class EnumAVAILABILITY_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AVAILABILITY_TYPE_1.AVAILABILITY_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AVAILABILITY_TYPE_1.AVAILABILITY_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AVAILABILITY_TYPE_1.AVAILABILITY_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAVAILABILITY_TYPEWithAggregatesFilter_1.NestedEnumAVAILABILITY_TYPEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAVAILABILITY_TYPEWithAggregatesFilter_1.NestedEnumAVAILABILITY_TYPEWithAggregatesFilter)
], EnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAVAILABILITY_TYPEFilter_1.NestedEnumAVAILABILITY_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAVAILABILITY_TYPEFilter_1.NestedEnumAVAILABILITY_TYPEFilter)
], EnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAVAILABILITY_TYPEFilter_1.NestedEnumAVAILABILITY_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAVAILABILITY_TYPEFilter_1.NestedEnumAVAILABILITY_TYPEFilter)
], EnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "_max", void 0);
EnumAVAILABILITY_TYPEWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumAVAILABILITY_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], EnumAVAILABILITY_TYPEWithAggregatesFilter);
exports.EnumAVAILABILITY_TYPEWithAggregatesFilter = EnumAVAILABILITY_TYPEWithAggregatesFilter;
