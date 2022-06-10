"use strict";
var NestedEnumREACTION_TYPEWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumREACTION_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumREACTION_TYPEFilter_1 = require("../inputs/NestedEnumREACTION_TYPEFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let NestedEnumREACTION_TYPEWithAggregatesFilter = NestedEnumREACTION_TYPEWithAggregatesFilter_1 = class NestedEnumREACTION_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumREACTION_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REACTION_TYPE_1.REACTION_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREACTION_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REACTION_TYPE_1.REACTION_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREACTION_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREACTION_TYPEWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREACTION_TYPEWithAggregatesFilter)
], NestedEnumREACTION_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumREACTION_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREACTION_TYPEFilter_1.NestedEnumREACTION_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREACTION_TYPEFilter_1.NestedEnumREACTION_TYPEFilter)
], NestedEnumREACTION_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREACTION_TYPEFilter_1.NestedEnumREACTION_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREACTION_TYPEFilter_1.NestedEnumREACTION_TYPEFilter)
], NestedEnumREACTION_TYPEWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumREACTION_TYPEWithAggregatesFilter = NestedEnumREACTION_TYPEWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumREACTION_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumREACTION_TYPEWithAggregatesFilter);
exports.NestedEnumREACTION_TYPEWithAggregatesFilter = NestedEnumREACTION_TYPEWithAggregatesFilter;
