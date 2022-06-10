"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateWithWhereUniqueWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyUpdateWithoutCommentInput_1 = require("../inputs/ReplyUpdateWithoutCommentInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyUpdateWithWhereUniqueWithoutCommentInput = class ReplyUpdateWithWhereUniqueWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], ReplyUpdateWithWhereUniqueWithoutCommentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateWithoutCommentInput_1.ReplyUpdateWithoutCommentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyUpdateWithoutCommentInput_1.ReplyUpdateWithoutCommentInput)
], ReplyUpdateWithWhereUniqueWithoutCommentInput.prototype, "data", void 0);
ReplyUpdateWithWhereUniqueWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpdateWithWhereUniqueWithoutCommentInput", {
        isAbstract: true
    })
], ReplyUpdateWithWhereUniqueWithoutCommentInput);
exports.ReplyUpdateWithWhereUniqueWithoutCommentInput = ReplyUpdateWithWhereUniqueWithoutCommentInput;
