"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAVAILABILITY_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumAVAILABILITY_TYPEFilter_1 = require("../inputs/NestedEnumAVAILABILITY_TYPEFilter");
const AVAILABILITY_TYPE_1 = require("../../enums/AVAILABILITY_TYPE");
let EnumAVAILABILITY_TYPEFilter = class EnumAVAILABILITY_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AVAILABILITY_TYPE_1.AVAILABILITY_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumAVAILABILITY_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AVAILABILITY_TYPE_1.AVAILABILITY_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAVAILABILITY_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AVAILABILITY_TYPE_1.AVAILABILITY_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumAVAILABILITY_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAVAILABILITY_TYPEFilter_1.NestedEnumAVAILABILITY_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAVAILABILITY_TYPEFilter_1.NestedEnumAVAILABILITY_TYPEFilter)
], EnumAVAILABILITY_TYPEFilter.prototype, "not", void 0);
EnumAVAILABILITY_TYPEFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumAVAILABILITY_TYPEFilter", {
        isAbstract: true
    })
], EnumAVAILABILITY_TYPEFilter);
exports.EnumAVAILABILITY_TYPEFilter = EnumAVAILABILITY_TYPEFilter;
