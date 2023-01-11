"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceWhereInput_1 = require("../inputs/ExperienceWhereInput");
let ExperienceListRelationFilter = class ExperienceListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereInput_1.ExperienceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereInput_1.ExperienceWhereInput)
], ExperienceListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereInput_1.ExperienceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereInput_1.ExperienceWhereInput)
], ExperienceListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereInput_1.ExperienceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereInput_1.ExperienceWhereInput)
], ExperienceListRelationFilter.prototype, "none", void 0);
ExperienceListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceListRelationFilter", {
        isAbstract: true
    })
], ExperienceListRelationFilter);
exports.ExperienceListRelationFilter = ExperienceListRelationFilter;
