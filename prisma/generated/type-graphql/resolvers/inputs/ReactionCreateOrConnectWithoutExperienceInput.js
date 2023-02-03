"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateOrConnectWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutExperienceInput_1 = require("../inputs/ReactionCreateWithoutExperienceInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateOrConnectWithoutExperienceInput = class ReactionCreateOrConnectWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionCreateOrConnectWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutExperienceInput_1.ReactionCreateWithoutExperienceInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutExperienceInput_1.ReactionCreateWithoutExperienceInput)
], ReactionCreateOrConnectWithoutExperienceInput.prototype, "create", void 0);
ReactionCreateOrConnectWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateOrConnectWithoutExperienceInput", {
        isAbstract: true
    })
], ReactionCreateOrConnectWithoutExperienceInput);
exports.ReactionCreateOrConnectWithoutExperienceInput = ReactionCreateOrConnectWithoutExperienceInput;
