"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertExperienceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateInput_1 = require("../../../inputs/ExperienceCreateInput");
const ExperienceUpdateInput_1 = require("../../../inputs/ExperienceUpdateInput");
const ExperienceWhereUniqueInput_1 = require("../../../inputs/ExperienceWhereUniqueInput");
let UpsertExperienceArgs = class UpsertExperienceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], UpsertExperienceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateInput_1.ExperienceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateInput_1.ExperienceCreateInput)
], UpsertExperienceArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateInput_1.ExperienceUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateInput_1.ExperienceUpdateInput)
], UpsertExperienceArgs.prototype, "update", void 0);
UpsertExperienceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertExperienceArgs);
exports.UpsertExperienceArgs = UpsertExperienceArgs;
