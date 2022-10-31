"use strict";
var NestedEnumTOPIC_TYPEFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumTOPIC_TYPEFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TOPIC_TYPE_1 = require("../../enums/TOPIC_TYPE");
let NestedEnumTOPIC_TYPEFilter = NestedEnumTOPIC_TYPEFilter_1 = class NestedEnumTOPIC_TYPEFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumTOPIC_TYPEFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TOPIC_TYPE_1.TOPIC_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTOPIC_TYPEFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TOPIC_TYPE_1.TOPIC_TYPE], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumTOPIC_TYPEFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumTOPIC_TYPEFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumTOPIC_TYPEFilter)
], NestedEnumTOPIC_TYPEFilter.prototype, "not", void 0);
NestedEnumTOPIC_TYPEFilter = NestedEnumTOPIC_TYPEFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumTOPIC_TYPEFilter", {
        isAbstract: true
    })
], NestedEnumTOPIC_TYPEFilter);
exports.NestedEnumTOPIC_TYPEFilter = NestedEnumTOPIC_TYPEFilter;
