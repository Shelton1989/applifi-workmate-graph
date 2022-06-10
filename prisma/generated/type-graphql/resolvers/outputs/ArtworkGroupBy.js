"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCountAggregate_1 = require("../outputs/ArtworkCountAggregate");
const ArtworkMaxAggregate_1 = require("../outputs/ArtworkMaxAggregate");
const ArtworkMinAggregate_1 = require("../outputs/ArtworkMinAggregate");
let ArtworkGroupBy = class ArtworkGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkGroupBy.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ArtworkGroupBy.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ArtworkGroupBy.prototype, "inventoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ArtworkGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCountAggregate_1.ArtworkCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCountAggregate_1.ArtworkCountAggregate)
], ArtworkGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkMinAggregate_1.ArtworkMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkMinAggregate_1.ArtworkMinAggregate)
], ArtworkGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkMaxAggregate_1.ArtworkMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkMaxAggregate_1.ArtworkMaxAggregate)
], ArtworkGroupBy.prototype, "_max", void 0);
ArtworkGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ArtworkGroupBy", {
        isAbstract: true
    })
], ArtworkGroupBy);
exports.ArtworkGroupBy = ArtworkGroupBy;
