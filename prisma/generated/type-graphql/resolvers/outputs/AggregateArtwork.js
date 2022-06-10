"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateArtwork = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCountAggregate_1 = require("../outputs/ArtworkCountAggregate");
const ArtworkMaxAggregate_1 = require("../outputs/ArtworkMaxAggregate");
const ArtworkMinAggregate_1 = require("../outputs/ArtworkMinAggregate");
let AggregateArtwork = class AggregateArtwork {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCountAggregate_1.ArtworkCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCountAggregate_1.ArtworkCountAggregate)
], AggregateArtwork.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkMinAggregate_1.ArtworkMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkMinAggregate_1.ArtworkMinAggregate)
], AggregateArtwork.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkMaxAggregate_1.ArtworkMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkMaxAggregate_1.ArtworkMaxAggregate)
], AggregateArtwork.prototype, "_max", void 0);
AggregateArtwork = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateArtwork", {
        isAbstract: true
    })
], AggregateArtwork);
exports.AggregateArtwork = AggregateArtwork;
