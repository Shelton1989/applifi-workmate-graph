"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateOrConnectWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateWithoutEpisodeInput_1 = require("../inputs/AggregateRatingCreateWithoutEpisodeInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingCreateOrConnectWithoutEpisodeInput = class AggregateRatingCreateOrConnectWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingCreateOrConnectWithoutEpisodeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutEpisodeInput_1.AggregateRatingCreateWithoutEpisodeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutEpisodeInput_1.AggregateRatingCreateWithoutEpisodeInput)
], AggregateRatingCreateOrConnectWithoutEpisodeInput.prototype, "create", void 0);
AggregateRatingCreateOrConnectWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateOrConnectWithoutEpisodeInput", {
        isAbstract: true
    })
], AggregateRatingCreateOrConnectWithoutEpisodeInput);
exports.AggregateRatingCreateOrConnectWithoutEpisodeInput = AggregateRatingCreateOrConnectWithoutEpisodeInput;
