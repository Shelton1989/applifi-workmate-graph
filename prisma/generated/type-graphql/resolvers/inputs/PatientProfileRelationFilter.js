"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileWhereInput_1 = require("../inputs/PatientProfileWhereInput");
let PatientProfileRelationFilter = class PatientProfileRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereInput_1.PatientProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereInput_1.PatientProfileWhereInput)
], PatientProfileRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereInput_1.PatientProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereInput_1.PatientProfileWhereInput)
], PatientProfileRelationFilter.prototype, "isNot", void 0);
PatientProfileRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileRelationFilter", {
        isAbstract: true
    })
], PatientProfileRelationFilter);
exports.PatientProfileRelationFilter = PatientProfileRelationFilter;
