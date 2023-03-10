"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateManyMealInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyMealInput_1 = require("../inputs/ReactionCreateManyMealInput");
let ReactionCreateManyMealInputEnvelope = class ReactionCreateManyMealInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateManyMealInput_1.ReactionCreateManyMealInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateManyMealInputEnvelope.prototype, "data", void 0);
ReactionCreateManyMealInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateManyMealInputEnvelope", {
        isAbstract: true
    })
], ReactionCreateManyMealInputEnvelope);
exports.ReactionCreateManyMealInputEnvelope = ReactionCreateManyMealInputEnvelope;
