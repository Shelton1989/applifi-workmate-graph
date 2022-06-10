"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSIZE_REGIONFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumSIZE_REGIONFilter_1 = require("../inputs/NestedEnumSIZE_REGIONFilter");
const SIZE_REGION_1 = require("../../enums/SIZE_REGION");
let EnumSIZE_REGIONFilter = class EnumSIZE_REGIONFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SIZE_REGION_1.SIZE_REGION, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSIZE_REGIONFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SIZE_REGION_1.SIZE_REGION], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSIZE_REGIONFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SIZE_REGION_1.SIZE_REGION], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSIZE_REGIONFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumSIZE_REGIONFilter_1.NestedEnumSIZE_REGIONFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumSIZE_REGIONFilter_1.NestedEnumSIZE_REGIONFilter)
], EnumSIZE_REGIONFilter.prototype, "not", void 0);
EnumSIZE_REGIONFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSIZE_REGIONFilter", {
        isAbstract: true
    })
], EnumSIZE_REGIONFilter);
exports.EnumSIZE_REGIONFilter = EnumSIZE_REGIONFilter;
