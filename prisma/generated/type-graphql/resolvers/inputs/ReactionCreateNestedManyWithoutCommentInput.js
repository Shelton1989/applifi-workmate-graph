"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateNestedManyWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyCommentInputEnvelope_1 = require("../inputs/ReactionCreateManyCommentInputEnvelope");
const ReactionCreateOrConnectWithoutCommentInput_1 = require("../inputs/ReactionCreateOrConnectWithoutCommentInput");
const ReactionCreateWithoutCommentInput_1 = require("../inputs/ReactionCreateWithoutCommentInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateNestedManyWithoutCommentInput = class ReactionCreateNestedManyWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutCommentInput_1.ReactionCreateWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutCommentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutCommentInput_1.ReactionCreateOrConnectWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutCommentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyCommentInputEnvelope_1.ReactionCreateManyCommentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyCommentInputEnvelope_1.ReactionCreateManyCommentInputEnvelope)
], ReactionCreateNestedManyWithoutCommentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutCommentInput.prototype, "connect", void 0);
ReactionCreateNestedManyWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateNestedManyWithoutCommentInput", {
        isAbstract: true
    })
], ReactionCreateNestedManyWithoutCommentInput);
exports.ReactionCreateNestedManyWithoutCommentInput = ReactionCreateNestedManyWithoutCommentInput;
