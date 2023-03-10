"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PatientProfileWhereUniqueInput = class PatientProfileWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileWhereUniqueInput.prototype, "userId", void 0);
PatientProfileWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileWhereUniqueInput", {
        isAbstract: true
    })
], PatientProfileWhereUniqueInput);
exports.PatientProfileWhereUniqueInput = PatientProfileWhereUniqueInput;
