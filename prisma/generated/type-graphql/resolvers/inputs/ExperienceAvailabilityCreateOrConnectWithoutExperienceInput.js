"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityCreateOrConnectWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityCreateWithoutExperienceInput_1 = require("../inputs/ExperienceAvailabilityCreateWithoutExperienceInput");
const ExperienceAvailabilityWhereUniqueInput_1 = require("../inputs/ExperienceAvailabilityWhereUniqueInput");
let ExperienceAvailabilityCreateOrConnectWithoutExperienceInput = class ExperienceAvailabilityCreateOrConnectWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput)
], ExperienceAvailabilityCreateOrConnectWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCreateWithoutExperienceInput_1.ExperienceAvailabilityCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCreateWithoutExperienceInput_1.ExperienceAvailabilityCreateWithoutExperienceInput)
], ExperienceAvailabilityCreateOrConnectWithoutExperienceInput.prototype, "create", void 0);
ExperienceAvailabilityCreateOrConnectWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityCreateOrConnectWithoutExperienceInput", {
        isAbstract: true
    })
], ExperienceAvailabilityCreateOrConnectWithoutExperienceInput);
exports.ExperienceAvailabilityCreateOrConnectWithoutExperienceInput = ExperienceAvailabilityCreateOrConnectWithoutExperienceInput;
