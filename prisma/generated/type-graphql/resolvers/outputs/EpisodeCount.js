"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EpisodeCount = class EpisodeCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EpisodeCount.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EpisodeCount.prototype, "Posts", void 0);
EpisodeCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EpisodeCount", {
        isAbstract: true
    })
], EpisodeCount);
exports.EpisodeCount = EpisodeCount;
