"use strict";
var NestedEnumAVAILABILITY_TYPEWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAVAILABILITY_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumAVAILABILITY_TYPEFilter_1 = require("../inputs/NestedEnumAVAILABILITY_TYPEFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const AVAILABILITY_TYPE_1 = require("../../enums/AVAILABILITY_TYPE");
let NestedEnumAVAILABILITY_TYPEWithAggregatesFilter = NestedEnumAVAILABILITY_TYPEWithAggregatesFilter_1 = class NestedEnumAVAILABILITY_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AVAILABILITY_TYPE_1.AVAILABILITY_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AVAILABILITY_TYPE_1.AVAILABILITY_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AVAILABILITY_TYPE_1.AVAILABILITY_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAVAILABILITY_TYPEWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAVAILABILITY_TYPEWithAggregatesFilter)
], NestedEnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAVAILABILITY_TYPEFilter_1.NestedEnumAVAILABILITY_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAVAILABILITY_TYPEFilter_1.NestedEnumAVAILABILITY_TYPEFilter)
], NestedEnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAVAILABILITY_TYPEFilter_1.NestedEnumAVAILABILITY_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAVAILABILITY_TYPEFilter_1.NestedEnumAVAILABILITY_TYPEFilter)
], NestedEnumAVAILABILITY_TYPEWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumAVAILABILITY_TYPEWithAggregatesFilter = NestedEnumAVAILABILITY_TYPEWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumAVAILABILITY_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumAVAILABILITY_TYPEWithAggregatesFilter);
exports.NestedEnumAVAILABILITY_TYPEWithAggregatesFilter = NestedEnumAVAILABILITY_TYPEWithAggregatesFilter;
