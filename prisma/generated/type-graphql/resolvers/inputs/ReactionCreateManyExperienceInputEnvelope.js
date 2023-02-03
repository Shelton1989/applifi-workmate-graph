"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManyExperienceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyExperienceInput_1 = require("../inputs/ReactionCreateManyExperienceInput");
let ReactionCreateManyExperienceInputEnvelope = class ReactionCreateManyExperienceInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateManyExperienceInput_1.ReactionCreateManyExperienceInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateManyExperienceInputEnvelope.prototype, "data", void 0);
ReactionCreateManyExperienceInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManyExperienceInputEnvelope", {
        isAbstract: true
    })
], ReactionCreateManyExperienceInputEnvelope);
exports.ReactionCreateManyExperienceInputEnvelope = ReactionCreateManyExperienceInputEnvelope;
