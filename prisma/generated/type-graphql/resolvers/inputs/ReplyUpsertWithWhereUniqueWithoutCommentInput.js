"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpsertWithWhereUniqueWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateWithoutCommentInput_1 = require("../inputs/ReplyCreateWithoutCommentInput");
const ReplyUpdateWithoutCommentInput_1 = require("../inputs/ReplyUpdateWithoutCommentInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyUpsertWithWhereUniqueWithoutCommentInput = class ReplyUpsertWithWhereUniqueWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], ReplyUpsertWithWhereUniqueWithoutCommentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateWithoutCommentInput_1.ReplyUpdateWithoutCommentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyUpdateWithoutCommentInput_1.ReplyUpdateWithoutCommentInput)
], ReplyUpsertWithWhereUniqueWithoutCommentInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateWithoutCommentInput_1.ReplyCreateWithoutCommentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyCreateWithoutCommentInput_1.ReplyCreateWithoutCommentInput)
], ReplyUpsertWithWhereUniqueWithoutCommentInput.prototype, "create", void 0);
ReplyUpsertWithWhereUniqueWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpsertWithWhereUniqueWithoutCommentInput", {
        isAbstract: true
    })
], ReplyUpsertWithWhereUniqueWithoutCommentInput);
exports.ReplyUpsertWithWhereUniqueWithoutCommentInput = ReplyUpsertWithWhereUniqueWithoutCommentInput;
