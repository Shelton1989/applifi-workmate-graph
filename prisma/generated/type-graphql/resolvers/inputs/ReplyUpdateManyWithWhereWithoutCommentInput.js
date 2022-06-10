"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyUpdateManyWithWhereWithoutCommentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyScalarWhereInput_1 = require("../inputs/ReplyScalarWhereInput");
const ReplyUpdateManyMutationInput_1 = require("../inputs/ReplyUpdateManyMutationInput");
let ReplyUpdateManyWithWhereWithoutCommentInput = class ReplyUpdateManyWithWhereWithoutCommentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyScalarWhereInput_1.ReplyScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyScalarWhereInput_1.ReplyScalarWhereInput)
], ReplyUpdateManyWithWhereWithoutCommentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyMutationInput_1.ReplyUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyMutationInput_1.ReplyUpdateManyMutationInput)
], ReplyUpdateManyWithWhereWithoutCommentInput.prototype, "data", void 0);
ReplyUpdateManyWithWhereWithoutCommentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyUpdateManyWithWhereWithoutCommentInput", {
        isAbstract: true
    })
], ReplyUpdateManyWithWhereWithoutCommentInput);
exports.ReplyUpdateManyWithWhereWithoutCommentInput = ReplyUpdateManyWithWhereWithoutCommentInput;
