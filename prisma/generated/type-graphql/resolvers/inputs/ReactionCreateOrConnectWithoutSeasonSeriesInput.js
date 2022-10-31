"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateOrConnectWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutSeasonSeriesInput_1 = require("../inputs/ReactionCreateWithoutSeasonSeriesInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateOrConnectWithoutSeasonSeriesInput = class ReactionCreateOrConnectWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionCreateOrConnectWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutSeasonSeriesInput_1.ReactionCreateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutSeasonSeriesInput_1.ReactionCreateWithoutSeasonSeriesInput)
], ReactionCreateOrConnectWithoutSeasonSeriesInput.prototype, "create", void 0);
ReactionCreateOrConnectWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateOrConnectWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], ReactionCreateOrConnectWithoutSeasonSeriesInput);
exports.ReactionCreateOrConnectWithoutSeasonSeriesInput = ReactionCreateOrConnectWithoutSeasonSeriesInput;
