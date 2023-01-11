"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyExperienceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceUpdateManyMutationInput_1 = require("../../../inputs/ExperienceUpdateManyMutationInput");
const ExperienceWhereInput_1 = require("../../../inputs/ExperienceWhereInput");
let UpdateManyExperienceArgs = class UpdateManyExperienceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateManyMutationInput_1.ExperienceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateManyMutationInput_1.ExperienceUpdateManyMutationInput)
], UpdateManyExperienceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereInput_1.ExperienceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereInput_1.ExperienceWhereInput)
], UpdateManyExperienceArgs.prototype, "where", void 0);
UpdateManyExperienceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyExperienceArgs);
exports.UpdateManyExperienceArgs = UpdateManyExperienceArgs;
