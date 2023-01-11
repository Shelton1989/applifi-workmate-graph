"use strict";
var NestedEnumAVAILABILITY_TYPEFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAVAILABILITY_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AVAILABILITY_TYPE_1 = require("../../enums/AVAILABILITY_TYPE");
let NestedEnumAVAILABILITY_TYPEFilter = NestedEnumAVAILABILITY_TYPEFilter_1 = class NestedEnumAVAILABILITY_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AVAILABILITY_TYPE_1.AVAILABILITY_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumAVAILABILITY_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AVAILABILITY_TYPE_1.AVAILABILITY_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAVAILABILITY_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AVAILABILITY_TYPE_1.AVAILABILITY_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumAVAILABILITY_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumAVAILABILITY_TYPEFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumAVAILABILITY_TYPEFilter)
], NestedEnumAVAILABILITY_TYPEFilter.prototype, "not", void 0);
NestedEnumAVAILABILITY_TYPEFilter = NestedEnumAVAILABILITY_TYPEFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumAVAILABILITY_TYPEFilter", {
        isAbstract: true
    })
], NestedEnumAVAILABILITY_TYPEFilter);
exports.NestedEnumAVAILABILITY_TYPEFilter = NestedEnumAVAILABILITY_TYPEFilter;
