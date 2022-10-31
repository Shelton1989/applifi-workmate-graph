"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EpisodeAvgAggregate = class EpisodeAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EpisodeAvgAggregate.prototype, "episodeNumber", void 0);
EpisodeAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EpisodeAvgAggregate", {
        isAbstract: true
    })
], EpisodeAvgAggregate);
exports.EpisodeAvgAggregate = EpisodeAvgAggregate;
