"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceAvgAggregate_1 = require("../outputs/ExperienceAvgAggregate");
const ExperienceCountAggregate_1 = require("../outputs/ExperienceCountAggregate");
const ExperienceMaxAggregate_1 = require("../outputs/ExperienceMaxAggregate");
const ExperienceMinAggregate_1 = require("../outputs/ExperienceMinAggregate");
const ExperienceSumAggregate_1 = require("../outputs/ExperienceSumAggregate");
const EXPERIENCE_CATEGORY_1 = require("../../enums/EXPERIENCE_CATEGORY");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let ExperienceGroupBy = class ExperienceGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceGroupBy.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceGroupBy.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceGroupBy.prototype, "stripeProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EXPERIENCE_CATEGORY_1.EXPERIENCE_CATEGORY, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceGroupBy.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceGroupBy.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ExperienceGroupBy.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ExperienceGroupBy.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceGroupBy.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ExperienceGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCountAggregate_1.ExperienceCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCountAggregate_1.ExperienceCountAggregate)
], ExperienceGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceAvgAggregate_1.ExperienceAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceAvgAggregate_1.ExperienceAvgAggregate)
], ExperienceGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceSumAggregate_1.ExperienceSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceSumAggregate_1.ExperienceSumAggregate)
], ExperienceGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceMinAggregate_1.ExperienceMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceMinAggregate_1.ExperienceMinAggregate)
], ExperienceGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceMaxAggregate_1.ExperienceMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceMaxAggregate_1.ExperienceMaxAggregate)
], ExperienceGroupBy.prototype, "_max", void 0);
ExperienceGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ExperienceGroupBy", {
        isAbstract: true
    })
], ExperienceGroupBy);
exports.ExperienceGroupBy = ExperienceGroupBy;
