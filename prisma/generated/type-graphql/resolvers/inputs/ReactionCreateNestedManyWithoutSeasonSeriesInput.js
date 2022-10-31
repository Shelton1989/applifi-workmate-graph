"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateNestedManyWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManySeasonSeriesInputEnvelope_1 = require("../inputs/ReactionCreateManySeasonSeriesInputEnvelope");
const ReactionCreateOrConnectWithoutSeasonSeriesInput_1 = require("../inputs/ReactionCreateOrConnectWithoutSeasonSeriesInput");
const ReactionCreateWithoutSeasonSeriesInput_1 = require("../inputs/ReactionCreateWithoutSeasonSeriesInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateNestedManyWithoutSeasonSeriesInput = class ReactionCreateNestedManyWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutSeasonSeriesInput_1.ReactionCreateWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutSeasonSeriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutSeasonSeriesInput_1.ReactionCreateOrConnectWithoutSeasonSeriesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutSeasonSeriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManySeasonSeriesInputEnvelope_1.ReactionCreateManySeasonSeriesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManySeasonSeriesInputEnvelope_1.ReactionCreateManySeasonSeriesInputEnvelope)
], ReactionCreateNestedManyWithoutSeasonSeriesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutSeasonSeriesInput.prototype, "connect", void 0);
ReactionCreateNestedManyWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateNestedManyWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], ReactionCreateNestedManyWithoutSeasonSeriesInput);
exports.ReactionCreateNestedManyWithoutSeasonSeriesInput = ReactionCreateNestedManyWithoutSeasonSeriesInput;
