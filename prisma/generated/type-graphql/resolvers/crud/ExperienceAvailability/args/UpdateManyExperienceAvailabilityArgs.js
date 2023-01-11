"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityUpdateManyMutationInput_1 = require("../../../inputs/ExperienceAvailabilityUpdateManyMutationInput");
const ExperienceAvailabilityWhereInput_1 = require("../../../inputs/ExperienceAvailabilityWhereInput");
let UpdateManyExperienceAvailabilityArgs = class UpdateManyExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityUpdateManyMutationInput_1.ExperienceAvailabilityUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityUpdateManyMutationInput_1.ExperienceAvailabilityUpdateManyMutationInput)
], UpdateManyExperienceAvailabilityArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput)
], UpdateManyExperienceAvailabilityArgs.prototype, "where", void 0);
UpdateManyExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyExperienceAvailabilityArgs);
exports.UpdateManyExperienceAvailabilityArgs = UpdateManyExperienceAvailabilityArgs;
