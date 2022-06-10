"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandCountAggregate_1 = require("../outputs/BrandCountAggregate");
const BrandMaxAggregate_1 = require("../outputs/BrandMaxAggregate");
const BrandMinAggregate_1 = require("../outputs/BrandMinAggregate");
const STATUS_1 = require("../../enums/STATUS");
let BrandGroupBy = class BrandGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandGroupBy.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BrandGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BrandGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BrandGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandCountAggregate_1.BrandCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandCountAggregate_1.BrandCountAggregate)
], BrandGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandMinAggregate_1.BrandMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandMinAggregate_1.BrandMinAggregate)
], BrandGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandMaxAggregate_1.BrandMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandMaxAggregate_1.BrandMaxAggregate)
], BrandGroupBy.prototype, "_max", void 0);
BrandGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BrandGroupBy", {
        isAbstract: true
    })
], BrandGroupBy);
exports.BrandGroupBy = BrandGroupBy;
