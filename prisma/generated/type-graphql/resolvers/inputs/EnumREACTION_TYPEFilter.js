"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumREACTION_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumREACTION_TYPEFilter_1 = require("../inputs/NestedEnumREACTION_TYPEFilter");
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let EnumREACTION_TYPEFilter = class EnumREACTION_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumREACTION_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REACTION_TYPE_1.REACTION_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREACTION_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REACTION_TYPE_1.REACTION_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumREACTION_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREACTION_TYPEFilter_1.NestedEnumREACTION_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREACTION_TYPEFilter_1.NestedEnumREACTION_TYPEFilter)
], EnumREACTION_TYPEFilter.prototype, "not", void 0);
EnumREACTION_TYPEFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumREACTION_TYPEFilter", {
        isAbstract: true
    })
], EnumREACTION_TYPEFilter);
exports.EnumREACTION_TYPEFilter = EnumREACTION_TYPEFilter;
