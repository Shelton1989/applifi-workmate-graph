"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateNestedOneWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateOrConnectWithoutAggregateRatingInput_1 = require("../inputs/EpisodeCreateOrConnectWithoutAggregateRatingInput");
const EpisodeCreateWithoutAggregateRatingInput_1 = require("../inputs/EpisodeCreateWithoutAggregateRatingInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeCreateNestedOneWithoutAggregateRatingInput = class EpisodeCreateNestedOneWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutAggregateRatingInput_1.EpisodeCreateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutAggregateRatingInput_1.EpisodeCreateWithoutAggregateRatingInput)
], EpisodeCreateNestedOneWithoutAggregateRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateOrConnectWithoutAggregateRatingInput_1.EpisodeCreateOrConnectWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateOrConnectWithoutAggregateRatingInput_1.EpisodeCreateOrConnectWithoutAggregateRatingInput)
], EpisodeCreateNestedOneWithoutAggregateRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeCreateNestedOneWithoutAggregateRatingInput.prototype, "connect", void 0);
EpisodeCreateNestedOneWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateNestedOneWithoutAggregateRatingInput", {
        isAbstract: true
    })
], EpisodeCreateNestedOneWithoutAggregateRatingInput);
exports.EpisodeCreateNestedOneWithoutAggregateRatingInput = EpisodeCreateNestedOneWithoutAggregateRatingInput;
