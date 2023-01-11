"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityCreateManyInput_1 = require("../../../inputs/ExperienceAvailabilityCreateManyInput");
let CreateManyExperienceAvailabilityArgs = class CreateManyExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityCreateManyInput_1.ExperienceAvailabilityCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyExperienceAvailabilityArgs.prototype, "data", void 0);
CreateManyExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyExperienceAvailabilityArgs);
exports.CreateManyExperienceAvailabilityArgs = CreateManyExperienceAvailabilityArgs;
