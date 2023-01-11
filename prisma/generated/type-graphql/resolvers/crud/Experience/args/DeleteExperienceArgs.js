"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteExperienceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceWhereUniqueInput_1 = require("../../../inputs/ExperienceWhereUniqueInput");
let DeleteExperienceArgs = class DeleteExperienceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], DeleteExperienceArgs.prototype, "where", void 0);
DeleteExperienceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteExperienceArgs);
exports.DeleteExperienceArgs = DeleteExperienceArgs;
