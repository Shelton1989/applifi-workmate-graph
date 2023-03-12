"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCountOrderByAggregateInput_1 = require("../inputs/PatientProfileCountOrderByAggregateInput");
const PatientProfileMaxOrderByAggregateInput_1 = require("../inputs/PatientProfileMaxOrderByAggregateInput");
const PatientProfileMinOrderByAggregateInput_1 = require("../inputs/PatientProfileMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PatientProfileOrderByWithAggregationInput = class PatientProfileOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "allServicesOpen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCountOrderByAggregateInput_1.PatientProfileCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCountOrderByAggregateInput_1.PatientProfileCountOrderByAggregateInput)
], PatientProfileOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileMaxOrderByAggregateInput_1.PatientProfileMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileMaxOrderByAggregateInput_1.PatientProfileMaxOrderByAggregateInput)
], PatientProfileOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileMinOrderByAggregateInput_1.PatientProfileMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileMinOrderByAggregateInput_1.PatientProfileMinOrderByAggregateInput)
], PatientProfileOrderByWithAggregationInput.prototype, "_min", void 0);
PatientProfileOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileOrderByWithAggregationInput", {
        isAbstract: true
    })
], PatientProfileOrderByWithAggregationInput);
exports.PatientProfileOrderByWithAggregationInput = PatientProfileOrderByWithAggregationInput;
