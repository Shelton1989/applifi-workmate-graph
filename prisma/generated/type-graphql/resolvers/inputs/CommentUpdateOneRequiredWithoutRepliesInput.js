"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateOneRequiredWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateOrConnectWithoutRepliesInput_1 = require("../inputs/CommentCreateOrConnectWithoutRepliesInput");
const CommentCreateWithoutRepliesInput_1 = require("../inputs/CommentCreateWithoutRepliesInput");
const CommentUpdateWithoutRepliesInput_1 = require("../inputs/CommentUpdateWithoutRepliesInput");
const CommentUpsertWithoutRepliesInput_1 = require("../inputs/CommentUpsertWithoutRepliesInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateOneRequiredWithoutRepliesInput = class CommentUpdateOneRequiredWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutRepliesInput_1.CommentCreateWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutRepliesInput_1.CommentCreateWithoutRepliesInput)
], CommentUpdateOneRequiredWithoutRepliesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutRepliesInput_1.CommentCreateOrConnectWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateOrConnectWithoutRepliesInput_1.CommentCreateOrConnectWithoutRepliesInput)
], CommentUpdateOneRequiredWithoutRepliesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpsertWithoutRepliesInput_1.CommentUpsertWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpsertWithoutRepliesInput_1.CommentUpsertWithoutRepliesInput)
], CommentUpdateOneRequiredWithoutRepliesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpdateOneRequiredWithoutRepliesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutRepliesInput_1.CommentUpdateWithoutRepliesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutRepliesInput_1.CommentUpdateWithoutRepliesInput)
], CommentUpdateOneRequiredWithoutRepliesInput.prototype, "update", void 0);
CommentUpdateOneRequiredWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateOneRequiredWithoutRepliesInput", {
        isAbstract: true
    })
], CommentUpdateOneRequiredWithoutRepliesInput);
exports.CommentUpdateOneRequiredWithoutRepliesInput = CommentUpdateOneRequiredWithoutRepliesInput;
