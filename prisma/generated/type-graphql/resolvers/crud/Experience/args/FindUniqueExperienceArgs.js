"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueExperienceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceWhereUniqueInput_1 = require("../../../inputs/ExperienceWhereUniqueInput");
let FindUniqueExperienceArgs = class FindUniqueExperienceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], FindUniqueExperienceArgs.prototype, "where", void 0);
FindUniqueExperienceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueExperienceArgs);
exports.FindUniqueExperienceArgs = FindUniqueExperienceArgs;
