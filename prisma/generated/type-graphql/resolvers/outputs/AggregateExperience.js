"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateExperience = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvgAggregate_1 = require("../outputs/ExperienceAvgAggregate");
const ExperienceCountAggregate_1 = require("../outputs/ExperienceCountAggregate");
const ExperienceMaxAggregate_1 = require("../outputs/ExperienceMaxAggregate");
const ExperienceMinAggregate_1 = require("../outputs/ExperienceMinAggregate");
const ExperienceSumAggregate_1 = require("../outputs/ExperienceSumAggregate");
let AggregateExperience = class AggregateExperience {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCountAggregate_1.ExperienceCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCountAggregate_1.ExperienceCountAggregate)
], AggregateExperience.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvgAggregate_1.ExperienceAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvgAggregate_1.ExperienceAvgAggregate)
], AggregateExperience.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceSumAggregate_1.ExperienceSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceSumAggregate_1.ExperienceSumAggregate)
], AggregateExperience.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceMinAggregate_1.ExperienceMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceMinAggregate_1.ExperienceMinAggregate)
], AggregateExperience.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceMaxAggregate_1.ExperienceMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceMaxAggregate_1.ExperienceMaxAggregate)
], AggregateExperience.prototype, "_max", void 0);
AggregateExperience = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateExperience", {
        isAbstract: true
    })
], AggregateExperience);
exports.AggregateExperience = AggregateExperience;
