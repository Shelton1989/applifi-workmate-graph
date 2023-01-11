"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyExperienceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateManyInput_1 = require("../../../inputs/ExperienceCreateManyInput");
let CreateManyExperienceArgs = class CreateManyExperienceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceCreateManyInput_1.ExperienceCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyExperienceArgs.prototype, "data", void 0);
CreateManyExperienceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyExperienceArgs);
exports.CreateManyExperienceArgs = CreateManyExperienceArgs;
