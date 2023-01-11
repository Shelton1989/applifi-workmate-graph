"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyExperienceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceOrderByWithRelationInput_1 = require("../../../inputs/ExperienceOrderByWithRelationInput");
const ExperienceWhereInput_1 = require("../../../inputs/ExperienceWhereInput");
const ExperienceWhereUniqueInput_1 = require("../../../inputs/ExperienceWhereUniqueInput");
const ExperienceScalarFieldEnum_1 = require("../../../../enums/ExperienceScalarFieldEnum");
let FindManyExperienceArgs = class FindManyExperienceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereInput_1.ExperienceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereInput_1.ExperienceWhereInput)
], FindManyExperienceArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceOrderByWithRelationInput_1.ExperienceOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyExperienceArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], FindManyExperienceArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyExperienceArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyExperienceArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceScalarFieldEnum_1.ExperienceScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyExperienceArgs.prototype, "distinct", void 0);
FindManyExperienceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyExperienceArgs);
exports.FindManyExperienceArgs = FindManyExperienceArgs;
