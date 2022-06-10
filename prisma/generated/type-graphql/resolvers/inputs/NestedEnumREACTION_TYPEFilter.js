"use strict";
var NestedEnumREACTION_TYPEFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumREACTION_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const REACTION_TYPE_1 = require("../../enums/REACTION_TYPE");
let NestedEnumREACTION_TYPEFilter = NestedEnumREACTION_TYPEFilter_1 = class NestedEnumREACTION_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REACTION_TYPE_1.REACTION_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumREACTION_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REACTION_TYPE_1.REACTION_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREACTION_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [REACTION_TYPE_1.REACTION_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumREACTION_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumREACTION_TYPEFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumREACTION_TYPEFilter)
], NestedEnumREACTION_TYPEFilter.prototype, "not", void 0);
NestedEnumREACTION_TYPEFilter = NestedEnumREACTION_TYPEFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumREACTION_TYPEFilter", {
        isAbstract: true
    })
], NestedEnumREACTION_TYPEFilter);
exports.NestedEnumREACTION_TYPEFilter = NestedEnumREACTION_TYPEFilter;
