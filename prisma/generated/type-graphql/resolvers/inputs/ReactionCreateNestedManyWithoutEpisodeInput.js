"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateNestedManyWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyEpisodeInputEnvelope_1 = require("../inputs/ReactionCreateManyEpisodeInputEnvelope");
const ReactionCreateOrConnectWithoutEpisodeInput_1 = require("../inputs/ReactionCreateOrConnectWithoutEpisodeInput");
const ReactionCreateWithoutEpisodeInput_1 = require("../inputs/ReactionCreateWithoutEpisodeInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateNestedManyWithoutEpisodeInput = class ReactionCreateNestedManyWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutEpisodeInput_1.ReactionCreateWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutEpisodeInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutEpisodeInput_1.ReactionCreateOrConnectWithoutEpisodeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutEpisodeInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyEpisodeInputEnvelope_1.ReactionCreateManyEpisodeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyEpisodeInputEnvelope_1.ReactionCreateManyEpisodeInputEnvelope)
], ReactionCreateNestedManyWithoutEpisodeInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutEpisodeInput.prototype, "connect", void 0);
ReactionCreateNestedManyWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateNestedManyWithoutEpisodeInput", {
        isAbstract: true
    })
], ReactionCreateNestedManyWithoutEpisodeInput);
exports.ReactionCreateNestedManyWithoutEpisodeInput = ReactionCreateNestedManyWithoutEpisodeInput;
