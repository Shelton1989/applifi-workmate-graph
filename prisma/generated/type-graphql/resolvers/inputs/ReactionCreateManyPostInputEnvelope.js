"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManyPostInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyPostInput_1 = require("../inputs/ReactionCreateManyPostInput");
let ReactionCreateManyPostInputEnvelope = class ReactionCreateManyPostInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateManyPostInput_1.ReactionCreateManyPostInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateManyPostInputEnvelope.prototype, "data", void 0);
ReactionCreateManyPostInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManyPostInputEnvelope", {
        isAbstract: true
    })
], ReactionCreateManyPostInputEnvelope);
exports.ReactionCreateManyPostInputEnvelope = ReactionCreateManyPostInputEnvelope;
