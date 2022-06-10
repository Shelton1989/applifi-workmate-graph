"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateNestedManyWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateManyCommentInputEnvelope_1 = require("../inputs/ReplyCreateManyCommentInputEnvelope");
const ReplyCreateOrConnectWithoutCommentInput_1 = require("../inputs/ReplyCreateOrConnectWithoutCommentInput");
const ReplyCreateWithoutCommentInput_1 = require("../inputs/ReplyCreateWithoutCommentInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyCreateNestedManyWithoutCommentInput = class ReplyCreateNestedManyWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateWithoutCommentInput_1.ReplyCreateWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyCreateNestedManyWithoutCommentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateOrConnectWithoutCommentInput_1.ReplyCreateOrConnectWithoutCommentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyCreateNestedManyWithoutCommentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateManyCommentInputEnvelope_1.ReplyCreateManyCommentInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateManyCommentInputEnvelope_1.ReplyCreateManyCommentInputEnvelope)
], ReplyCreateNestedManyWithoutCommentInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyWhereUniqueInput_1.ReplyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyCreateNestedManyWithoutCommentInput.prototype, "connect", void 0);
ReplyCreateNestedManyWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateNestedManyWithoutCommentInput", {
        isAbstract: true
    })
], ReplyCreateNestedManyWithoutCommentInput);
exports.ReplyCreateNestedManyWithoutCommentInput = ReplyCreateNestedManyWithoutCommentInput;
