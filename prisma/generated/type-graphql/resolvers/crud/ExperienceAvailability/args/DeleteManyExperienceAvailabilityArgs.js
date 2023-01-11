"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityWhereInput_1 = require("../../../inputs/ExperienceAvailabilityWhereInput");
let DeleteManyExperienceAvailabilityArgs = class DeleteManyExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput)
], DeleteManyExperienceAvailabilityArgs.prototype, "where", void 0);
DeleteManyExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyExperienceAvailabilityArgs);
exports.DeleteManyExperienceAvailabilityArgs = DeleteManyExperienceAvailabilityArgs;
