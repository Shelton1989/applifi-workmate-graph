"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyAuthorInput_1 = require("../inputs/ReactionCreateManyAuthorInput");
let ReactionCreateManyAuthorInputEnvelope = class ReactionCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateManyAuthorInput_1.ReactionCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateManyAuthorInputEnvelope.prototype, "data", void 0);
ReactionCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManyAuthorInputEnvelope", {
        isAbstract: true
    })
], ReactionCreateManyAuthorInputEnvelope);
exports.ReactionCreateManyAuthorInputEnvelope = ReactionCreateManyAuthorInputEnvelope;
