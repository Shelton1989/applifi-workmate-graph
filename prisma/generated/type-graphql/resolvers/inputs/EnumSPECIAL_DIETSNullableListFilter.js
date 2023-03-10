"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumSPECIAL_DIETSNullableListFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SPECIAL_DIETS_1 = require("../../enums/SPECIAL_DIETS");
let EnumSPECIAL_DIETSNullableListFilter = class EnumSPECIAL_DIETSNullableListFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSPECIAL_DIETSNullableListFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SPECIAL_DIETS_1.SPECIAL_DIETS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumSPECIAL_DIETSNullableListFilter.prototype, "has", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSPECIAL_DIETSNullableListFilter.prototype, "hasEvery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumSPECIAL_DIETSNullableListFilter.prototype, "hasSome", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], EnumSPECIAL_DIETSNullableListFilter.prototype, "isEmpty", void 0);
EnumSPECIAL_DIETSNullableListFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumSPECIAL_DIETSNullableListFilter", {
        isAbstract: true
    })
], EnumSPECIAL_DIETSNullableListFilter);
exports.EnumSPECIAL_DIETSNullableListFilter = EnumSPECIAL_DIETSNullableListFilter;
