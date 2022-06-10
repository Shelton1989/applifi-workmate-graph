"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateManyAuthorInput_1 = require("../inputs/CommentCreateManyAuthorInput");
let CommentCreateManyAuthorInputEnvelope = class CommentCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CommentCreateManyAuthorInput_1.CommentCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CommentCreateManyAuthorInputEnvelope.prototype, "data", void 0);
CommentCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentCreateManyAuthorInputEnvelope", {
        isAbstract: true
    })
], CommentCreateManyAuthorInputEnvelope);
exports.CommentCreateManyAuthorInputEnvelope = CommentCreateManyAuthorInputEnvelope;
