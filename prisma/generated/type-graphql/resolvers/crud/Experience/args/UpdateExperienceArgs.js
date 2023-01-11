"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExperienceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceUpdateInput_1 = require("../../../inputs/ExperienceUpdateInput");
const ExperienceWhereUniqueInput_1 = require("../../../inputs/ExperienceWhereUniqueInput");
let UpdateExperienceArgs = class UpdateExperienceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateInput_1.ExperienceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateInput_1.ExperienceUpdateInput)
], UpdateExperienceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], UpdateExperienceArgs.prototype, "where", void 0);
UpdateExperienceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateExperienceArgs);
exports.UpdateExperienceArgs = UpdateExperienceArgs;
