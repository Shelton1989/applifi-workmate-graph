"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityCreateInput_1 = require("../../../inputs/ExperienceAvailabilityCreateInput");
let CreateExperienceAvailabilityArgs = class CreateExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityCreateInput_1.ExperienceAvailabilityCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityCreateInput_1.ExperienceAvailabilityCreateInput)
], CreateExperienceAvailabilityArgs.prototype, "data", void 0);
CreateExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateExperienceAvailabilityArgs);
exports.CreateExperienceAvailabilityArgs = CreateExperienceAvailabilityArgs;
