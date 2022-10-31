"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EpisodeAvgOrderByAggregateInput = class EpisodeAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeAvgOrderByAggregateInput.prototype, "episodeNumber", void 0);
EpisodeAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeAvgOrderByAggregateInput", {
        isAbstract: true
    })
], EpisodeAvgOrderByAggregateInput);
exports.EpisodeAvgOrderByAggregateInput = EpisodeAvgOrderByAggregateInput;
