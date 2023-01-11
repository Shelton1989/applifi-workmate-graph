"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvailabilityWhereInput_1 = require("../inputs/ExperienceAvailabilityWhereInput");
let ExperienceAvailabilityListRelationFilter = class ExperienceAvailabilityListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput)
], ExperienceAvailabilityListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput)
], ExperienceAvailabilityListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvailabilityWhereInput_1.ExperienceAvailabilityWhereInput)
], ExperienceAvailabilityListRelationFilter.prototype, "none", void 0);
ExperienceAvailabilityListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceAvailabilityListRelationFilter", {
        isAbstract: true
    })
], ExperienceAvailabilityListRelationFilter);
exports.ExperienceAvailabilityListRelationFilter = ExperienceAvailabilityListRelationFilter;
