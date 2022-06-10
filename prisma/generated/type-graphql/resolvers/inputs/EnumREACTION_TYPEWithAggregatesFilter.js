"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumREACTION_TYPEWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumREACTION_TYPEFilter_1 = require("../inputs/NestedEnumREACTION_TYPEFilter");
const NestedEnumREACTION_TYPEWithAggregatesFilter_1 = require("../inputs/NestedEnumREACTION_TYPEWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let EnumREACTION_TYPEWithAggregatesFilter = class EnumREACTION_TYPEWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumREACTION_TYPEWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REACTION_TYPE_1.REACTION_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREACTION_TYPEWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REACTION_TYPE_1.REACTION_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREACTION_TYPEWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREACTION_TYPEWithAggregatesFilter_1.NestedEnumREACTION_TYPEWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREACTION_TYPEWithAggregatesFilter_1.NestedEnumREACTION_TYPEWithAggregatesFilter)
], EnumREACTION_TYPEWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumREACTION_TYPEWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREACTION_TYPEFilter_1.NestedEnumREACTION_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREACTION_TYPEFilter_1.NestedEnumREACTION_TYPEFilter)
], EnumREACTION_TYPEWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREACTION_TYPEFilter_1.NestedEnumREACTION_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREACTION_TYPEFilter_1.NestedEnumREACTION_TYPEFilter)
], EnumREACTION_TYPEWithAggregatesFilter.prototype, "_max", void 0);
EnumREACTION_TYPEWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumREACTION_TYPEWithAggregatesFilter", {
        isAbstract: true
    })
], EnumREACTION_TYPEWithAggregatesFilter);
exports.EnumREACTION_TYPEWithAggregatesFilter = EnumREACTION_TYPEWithAggregatesFilter;
