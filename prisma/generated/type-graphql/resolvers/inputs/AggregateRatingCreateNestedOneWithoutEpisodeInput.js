"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateNestedOneWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateOrConnectWithoutEpisodeInput_1 = require("../inputs/AggregateRatingCreateOrConnectWithoutEpisodeInput");
const AggregateRatingCreateWithoutEpisodeInput_1 = require("../inputs/AggregateRatingCreateWithoutEpisodeInput");
const AggregateRatingWhereUniqueInput_1 = require("../inputs/AggregateRatingWhereUniqueInput");
let AggregateRatingCreateNestedOneWithoutEpisodeInput = class AggregateRatingCreateNestedOneWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateWithoutEpisodeInput_1.AggregateRatingCreateWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateWithoutEpisodeInput_1.AggregateRatingCreateWithoutEpisodeInput)
], AggregateRatingCreateNestedOneWithoutEpisodeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateOrConnectWithoutEpisodeInput_1.AggregateRatingCreateOrConnectWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateOrConnectWithoutEpisodeInput_1.AggregateRatingCreateOrConnectWithoutEpisodeInput)
], AggregateRatingCreateNestedOneWithoutEpisodeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateRatingCreateNestedOneWithoutEpisodeInput.prototype, "connect", void 0);
AggregateRatingCreateNestedOneWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateNestedOneWithoutEpisodeInput", {
        isAbstract: true
    })
], AggregateRatingCreateNestedOneWithoutEpisodeInput);
exports.AggregateRatingCreateNestedOneWithoutEpisodeInput = AggregateRatingCreateNestedOneWithoutEpisodeInput;
