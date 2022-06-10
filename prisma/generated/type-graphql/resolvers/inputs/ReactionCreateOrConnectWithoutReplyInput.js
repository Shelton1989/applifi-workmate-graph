"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateOrConnectWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutReplyInput_1 = require("../inputs/ReactionCreateWithoutReplyInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateOrConnectWithoutReplyInput = class ReactionCreateOrConnectWithoutReplyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionCreateOrConnectWithoutReplyInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutReplyInput_1.ReactionCreateWithoutReplyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutReplyInput_1.ReactionCreateWithoutReplyInput)
], ReactionCreateOrConnectWithoutReplyInput.prototype, "create", void 0);
ReactionCreateOrConnectWithoutReplyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateOrConnectWithoutReplyInput", {
        isAbstract: true
    })
], ReactionCreateOrConnectWithoutReplyInput);
exports.ReactionCreateOrConnectWithoutReplyInput = ReactionCreateOrConnectWithoutReplyInput;
