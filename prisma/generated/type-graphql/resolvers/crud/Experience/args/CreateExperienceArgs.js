"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExperienceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateInput_1 = require("../../../inputs/ExperienceCreateInput");
let CreateExperienceArgs = class CreateExperienceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateInput_1.ExperienceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateInput_1.ExperienceCreateInput)
], CreateExperienceArgs.prototype, "data", void 0);
CreateExperienceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateExperienceArgs);
exports.CreateExperienceArgs = CreateExperienceArgs;
