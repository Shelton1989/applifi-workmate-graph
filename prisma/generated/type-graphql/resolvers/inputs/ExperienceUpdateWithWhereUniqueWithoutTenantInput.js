"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateWithWhereUniqueWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceUpdateWithoutTenantInput_1 = require("../inputs/ExperienceUpdateWithoutTenantInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateWithWhereUniqueWithoutTenantInput = class ExperienceUpdateWithWhereUniqueWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateWithWhereUniqueWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutTenantInput_1.ExperienceUpdateWithoutTenantInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutTenantInput_1.ExperienceUpdateWithoutTenantInput)
], ExperienceUpdateWithWhereUniqueWithoutTenantInput.prototype, "data", void 0);
ExperienceUpdateWithWhereUniqueWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateWithWhereUniqueWithoutTenantInput", {
        isAbstract: true
    })
], ExperienceUpdateWithWhereUniqueWithoutTenantInput);
exports.ExperienceUpdateWithWhereUniqueWithoutTenantInput = ExperienceUpdateWithWhereUniqueWithoutTenantInput;
