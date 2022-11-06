"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpsertWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateWithoutEpisodeInput_1 = require("../inputs/AggregateRatingCreateWithoutEpisodeInput");
const AggregateRatingUpdateWithoutEpisodeInput_1 = require("../inputs/AggregateRatingUpdateWithoutEpisodeInput");
let AggregateRatingUpsertWithoutEpisodeInput = class AggregateRatingUpsertWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateWithoutEpisodeInput_1.AggregateRatingUpdateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateWithoutEpisodeInput_1.AggregateRatingUpdateWithoutEpisodeInput)
], AggregateRatingUpsertWithoutEpisodeInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutEpisodeInput_1.AggregateRatingCreateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutEpisodeInput_1.AggregateRatingCreateWithoutEpisodeInput)
], AggregateRatingUpsertWithoutEpisodeInput.prototype, "create", void 0);
AggregateRatingUpsertWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpsertWithoutEpisodeInput", {
        isAbstract: true
    })
], AggregateRatingUpsertWithoutEpisodeInput);
exports.AggregateRatingUpsertWithoutEpisodeInput = AggregateRatingUpsertWithoutEpisodeInput;
