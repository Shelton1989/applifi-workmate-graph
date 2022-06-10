"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateOrConnectWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateWithoutCommentInput_1 = require("../inputs/ReplyCreateWithoutCommentInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyCreateOrConnectWithoutCommentInput = class ReplyCreateOrConnectWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], ReplyCreateOrConnectWithoutCommentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateWithoutCommentInput_1.ReplyCreateWithoutCommentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyCreateWithoutCommentInput_1.ReplyCreateWithoutCommentInput)
], ReplyCreateOrConnectWithoutCommentInput.prototype, "create", void 0);
ReplyCreateOrConnectWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateOrConnectWithoutCommentInput", {
        isAbstract: true
    })
], ReplyCreateOrConnectWithoutCommentInput);
exports.ReplyCreateOrConnectWithoutCommentInput = ReplyCreateOrConnectWithoutCommentInput;
