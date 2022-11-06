"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpsertWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateWithoutAggregateRatingInput_1 = require("../inputs/EpisodeCreateWithoutAggregateRatingInput");
const EpisodeUpdateWithoutAggregateRatingInput_1 = require("../inputs/EpisodeUpdateWithoutAggregateRatingInput");
let EpisodeUpsertWithoutAggregateRatingInput = class EpisodeUpsertWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateWithoutAggregateRatingInput_1.EpisodeUpdateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateWithoutAggregateRatingInput_1.EpisodeUpdateWithoutAggregateRatingInput)
], EpisodeUpsertWithoutAggregateRatingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutAggregateRatingInput_1.EpisodeCreateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutAggregateRatingInput_1.EpisodeCreateWithoutAggregateRatingInput)
], EpisodeUpsertWithoutAggregateRatingInput.prototype, "create", void 0);
EpisodeUpsertWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpsertWithoutAggregateRatingInput", {
        isAbstract: true
    })
], EpisodeUpsertWithoutAggregateRatingInput);
exports.EpisodeUpsertWithoutAggregateRatingInput = EpisodeUpsertWithoutAggregateRatingInput;
