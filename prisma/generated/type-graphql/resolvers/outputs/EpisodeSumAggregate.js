"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EpisodeSumAggregate = class EpisodeSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], EpisodeSumAggregate.prototype, "episodeNumber", void 0);
EpisodeSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EpisodeSumAggregate", {
        isAbstract: true
    })
], EpisodeSumAggregate);
exports.EpisodeSumAggregate = EpisodeSumAggregate;
