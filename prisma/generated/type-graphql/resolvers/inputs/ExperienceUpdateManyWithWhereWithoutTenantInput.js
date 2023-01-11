"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateManyWithWhereWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceScalarWhereInput_1 = require("../inputs/ExperienceScalarWhereInput");
const ExperienceUpdateManyMutationInput_1 = require("../inputs/ExperienceUpdateManyMutationInput");
let ExperienceUpdateManyWithWhereWithoutTenantInput = class ExperienceUpdateManyWithWhereWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceScalarWhereInput_1.ExperienceScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceScalarWhereInput_1.ExperienceScalarWhereInput)
], ExperienceUpdateManyWithWhereWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateManyMutationInput_1.ExperienceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateManyMutationInput_1.ExperienceUpdateManyMutationInput)
], ExperienceUpdateManyWithWhereWithoutTenantInput.prototype, "data", void 0);
ExperienceUpdateManyWithWhereWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateManyWithWhereWithoutTenantInput", {
        isAbstract: true
    })
], ExperienceUpdateManyWithWhereWithoutTenantInput);
exports.ExperienceUpdateManyWithWhereWithoutTenantInput = ExperienceUpdateManyWithWhereWithoutTenantInput;
