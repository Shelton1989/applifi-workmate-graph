"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstExperienceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceOrderByWithRelationInput_1 = require("../../../inputs/ExperienceOrderByWithRelationInput");
const ExperienceWhereInput_1 = require("../../../inputs/ExperienceWhereInput");
const ExperienceWhereUniqueInput_1 = require("../../../inputs/ExperienceWhereUniqueInput");
const ExperienceScalarFieldEnum_1 = require("../../../../enums/ExperienceScalarFieldEnum");
let FindFirstExperienceArgs = class FindFirstExperienceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereInput_1.ExperienceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereInput_1.ExperienceWhereInput)
], FindFirstExperienceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceOrderByWithRelationInput_1.ExperienceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstExperienceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], FindFirstExperienceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstExperienceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstExperienceArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceScalarFieldEnum_1.ExperienceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstExperienceArgs.prototype, "distinct", void 0);
FindFirstExperienceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstExperienceArgs);
exports.FindFirstExperienceArgs = FindFirstExperienceArgs;
