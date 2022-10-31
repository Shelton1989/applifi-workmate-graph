"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateOrConnectWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutTopicInput_1 = require("../inputs/ReactionCreateWithoutTopicInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateOrConnectWithoutTopicInput = class ReactionCreateOrConnectWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionCreateOrConnectWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutTopicInput_1.ReactionCreateWithoutTopicInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutTopicInput_1.ReactionCreateWithoutTopicInput)
], ReactionCreateOrConnectWithoutTopicInput.prototype, "create", void 0);
ReactionCreateOrConnectWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateOrConnectWithoutTopicInput", {
        isAbstract: true
    })
], ReactionCreateOrConnectWithoutTopicInput);
exports.ReactionCreateOrConnectWithoutTopicInput = ReactionCreateOrConnectWithoutTopicInput;
