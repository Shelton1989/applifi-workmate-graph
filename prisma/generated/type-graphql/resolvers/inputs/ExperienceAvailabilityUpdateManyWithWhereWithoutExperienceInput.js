"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityScalarWhereInput_1 = require("../inputs/ExperienceAvailabilityScalarWhereInput");
const ExperienceAvailabilityUpdateManyMutationInput_1 = require("../inputs/ExperienceAvailabilityUpdateManyMutationInput");
let ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput = class ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityScalarWhereInput_1.ExperienceAvailabilityScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityScalarWhereInput_1.ExperienceAvailabilityScalarWhereInput)
], ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityUpdateManyMutationInput_1.ExperienceAvailabilityUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityUpdateManyMutationInput_1.ExperienceAvailabilityUpdateManyMutationInput)
], ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput.prototype, "data", void 0);
ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput", {
        isAbstract: true
    })
], ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput);
exports.ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput = ExperienceAvailabilityUpdateManyWithWhereWithoutExperienceInput;
