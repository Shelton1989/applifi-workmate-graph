"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesCountAggregate_1 = require("../outputs/FeaturesCountAggregate");
const FeaturesMaxAggregate_1 = require("../outputs/FeaturesMaxAggregate");
const FeaturesMinAggregate_1 = require("../outputs/FeaturesMinAggregate");
let FeaturesGroupBy = class FeaturesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesGroupBy.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FeaturesGroupBy.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], FeaturesGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], FeaturesGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesCountAggregate_1.FeaturesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesCountAggregate_1.FeaturesCountAggregate)
], FeaturesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesMinAggregate_1.FeaturesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesMinAggregate_1.FeaturesMinAggregate)
], FeaturesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesMaxAggregate_1.FeaturesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesMaxAggregate_1.FeaturesMaxAggregate)
], FeaturesGroupBy.prototype, "_max", void 0);
FeaturesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FeaturesGroupBy", {
        isAbstract: true
    })
], FeaturesGroupBy);
exports.FeaturesGroupBy = FeaturesGroupBy;
