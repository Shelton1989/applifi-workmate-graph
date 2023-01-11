"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpsertWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutTenantInput_1 = require("../inputs/ExperienceCreateWithoutTenantInput");
const ExperienceUpdateWithoutTenantInput_1 = require("../inputs/ExperienceUpdateWithoutTenantInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpsertWithWhereUniqueWithoutTenantInput = class ExperienceUpsertWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpsertWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutTenantInput_1.ExperienceUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutTenantInput_1.ExperienceUpdateWithoutTenantInput)
], ExperienceUpsertWithWhereUniqueWithoutTenantInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutTenantInput_1.ExperienceCreateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutTenantInput_1.ExperienceCreateWithoutTenantInput)
], ExperienceUpsertWithWhereUniqueWithoutTenantInput.prototype, "create", void 0);
ExperienceUpsertWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpsertWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], ExperienceUpsertWithWhereUniqueWithoutTenantInput);
exports.ExperienceUpsertWithWhereUniqueWithoutTenantInput = ExperienceUpsertWithWhereUniqueWithoutTenantInput;
