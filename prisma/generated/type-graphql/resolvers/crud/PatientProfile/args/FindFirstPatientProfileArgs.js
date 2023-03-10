"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPatientProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileOrderByWithRelationInput_1 = require("../../../inputs/PatientProfileOrderByWithRelationInput");
const PatientProfileWhereInput_1 = require("../../../inputs/PatientProfileWhereInput");
const PatientProfileWhereUniqueInput_1 = require("../../../inputs/PatientProfileWhereUniqueInput");
const PatientProfileScalarFieldEnum_1 = require("../../../../enums/PatientProfileScalarFieldEnum");
let FindFirstPatientProfileArgs = class FindFirstPatientProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereInput_1.PatientProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereInput_1.PatientProfileWhereInput)
], FindFirstPatientProfileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileOrderByWithRelationInput_1.PatientProfileOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPatientProfileArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput)
], FindFirstPatientProfileArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPatientProfileArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPatientProfileArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileScalarFieldEnum_1.PatientProfileScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPatientProfileArgs.prototype, "distinct", void 0);
FindFirstPatientProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPatientProfileArgs);
exports.FindFirstPatientProfileArgs = FindFirstPatientProfileArgs;
