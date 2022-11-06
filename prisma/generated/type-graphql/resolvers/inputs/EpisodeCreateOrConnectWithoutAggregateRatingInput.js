"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateOrConnectWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateWithoutAggregateRatingInput_1 = require("../inputs/EpisodeCreateWithoutAggregateRatingInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeCreateOrConnectWithoutAggregateRatingInput = class EpisodeCreateOrConnectWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeCreateOrConnectWithoutAggregateRatingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutAggregateRatingInput_1.EpisodeCreateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutAggregateRatingInput_1.EpisodeCreateWithoutAggregateRatingInput)
], EpisodeCreateOrConnectWithoutAggregateRatingInput.prototype, "create", void 0);
EpisodeCreateOrConnectWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateOrConnectWithoutAggregateRatingInput", {
        isAbstract: true
    })
], EpisodeCreateOrConnectWithoutAggregateRatingInput);
exports.EpisodeCreateOrConnectWithoutAggregateRatingInput = EpisodeCreateOrConnectWithoutAggregateRatingInput;
