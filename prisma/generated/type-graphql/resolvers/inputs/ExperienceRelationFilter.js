"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceWhereInput_1 = require("../inputs/ExperienceWhereInput");
let ExperienceRelationFilter = class ExperienceRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereInput_1.ExperienceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereInput_1.ExperienceWhereInput)
], ExperienceRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereInput_1.ExperienceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereInput_1.ExperienceWhereInput)
], ExperienceRelationFilter.prototype, "isNot", void 0);
ExperienceRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceRelationFilter", {
        isAbstract: true
    })
], ExperienceRelationFilter);
exports.ExperienceRelationFilter = ExperienceRelationFilter;
