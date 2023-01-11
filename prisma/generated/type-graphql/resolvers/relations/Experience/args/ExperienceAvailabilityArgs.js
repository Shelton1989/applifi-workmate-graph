"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityOrderByWithRelationInput_1 = require("../../../inputs/ExperienceAvailabilityOrderByWithRelationInput");
const ExperienceAvailabilityWhereInput_1 = require("../../../inputs/ExperienceAvailabilityWhereInput");
const ExperienceAvailabilityWhereUniqueInput_1 = require("../../../inputs/ExperienceAvailabilityWhereUniqueInput");
const ExperienceAvailabilityScalarFieldEnum_1 = require("../../../../enums/ExperienceAvailabilityScalarFieldEnum");
let ExperienceAvailabilityArgs = class ExperienceAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput)
], ExperienceAvailabilityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityOrderByWithRelationInput_1.ExperienceAvailabilityOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereUniqueInput_1.ExperienceAvailabilityWhereUniqueInput)
], ExperienceAvailabilityArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceAvailabilityArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceAvailabilityScalarFieldEnum_1.ExperienceAvailabilityScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceAvailabilityArgs.prototype, "distinct", void 0);
ExperienceAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ExperienceAvailabilityArgs);
exports.ExperienceAvailabilityArgs = ExperienceAvailabilityArgs;
