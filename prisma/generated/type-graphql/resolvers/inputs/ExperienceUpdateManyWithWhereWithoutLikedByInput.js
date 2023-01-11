"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateManyWithWhereWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceScalarWhereInput_1 = require("../inputs/ExperienceScalarWhereInput");
const ExperienceUpdateManyMutationInput_1 = require("../inputs/ExperienceUpdateManyMutationInput");
let ExperienceUpdateManyWithWhereWithoutLikedByInput = class ExperienceUpdateManyWithWhereWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceScalarWhereInput_1.ExperienceScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceScalarWhereInput_1.ExperienceScalarWhereInput)
], ExperienceUpdateManyWithWhereWithoutLikedByInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateManyMutationInput_1.ExperienceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateManyMutationInput_1.ExperienceUpdateManyMutationInput)
], ExperienceUpdateManyWithWhereWithoutLikedByInput.prototype, "data", void 0);
ExperienceUpdateManyWithWhereWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateManyWithWhereWithoutLikedByInput", {
        isAbstract: true
    })
], ExperienceUpdateManyWithWhereWithoutLikedByInput);
exports.ExperienceUpdateManyWithWhereWithoutLikedByInput = ExperienceUpdateManyWithWhereWithoutLikedByInput;
