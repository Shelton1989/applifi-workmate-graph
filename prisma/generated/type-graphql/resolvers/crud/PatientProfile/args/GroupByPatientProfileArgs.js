"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPatientProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileOrderByWithAggregationInput_1 = require("../../../inputs/PatientProfileOrderByWithAggregationInput");
const PatientProfileScalarWhereWithAggregatesInput_1 = require("../../../inputs/PatientProfileScalarWhereWithAggregatesInput");
const PatientProfileWhereInput_1 = require("../../../inputs/PatientProfileWhereInput");
const PatientProfileScalarFieldEnum_1 = require("../../../../enums/PatientProfileScalarFieldEnum");
let GroupByPatientProfileArgs = class GroupByPatientProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereInput_1.PatientProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereInput_1.PatientProfileWhereInput)
], GroupByPatientProfileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileOrderByWithAggregationInput_1.PatientProfileOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPatientProfileArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileScalarFieldEnum_1.PatientProfileScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPatientProfileArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileScalarWhereWithAggregatesInput_1.PatientProfileScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileScalarWhereWithAggregatesInput_1.PatientProfileScalarWhereWithAggregatesInput)
], GroupByPatientProfileArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPatientProfileArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPatientProfileArgs.prototype, "skip", void 0);
GroupByPatientProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPatientProfileArgs);
exports.GroupByPatientProfileArgs = GroupByPatientProfileArgs;
