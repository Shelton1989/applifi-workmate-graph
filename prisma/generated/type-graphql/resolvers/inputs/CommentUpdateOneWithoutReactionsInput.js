"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentUpdateOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateOrConnectWithoutReactionsInput_1 = require("../inputs/CommentCreateOrConnectWithoutReactionsInput");
const CommentCreateWithoutReactionsInput_1 = require("../inputs/CommentCreateWithoutReactionsInput");
const CommentUpdateWithoutReactionsInput_1 = require("../inputs/CommentUpdateWithoutReactionsInput");
const CommentUpsertWithoutReactionsInput_1 = require("../inputs/CommentUpsertWithoutReactionsInput");
const CommentWhereUniqueInput_1 = require("../inputs/CommentWhereUniqueInput");
let CommentUpdateOneWithoutReactionsInput = class CommentUpdateOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateWithoutReactionsInput_1.CommentCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateWithoutReactionsInput_1.CommentCreateWithoutReactionsInput)
], CommentUpdateOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutReactionsInput_1.CommentCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateOrConnectWithoutReactionsInput_1.CommentCreateOrConnectWithoutReactionsInput)
], CommentUpdateOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpsertWithoutReactionsInput_1.CommentUpsertWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpsertWithoutReactionsInput_1.CommentUpsertWithoutReactionsInput)
], CommentUpdateOneWithoutReactionsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CommentUpdateOneWithoutReactionsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CommentUpdateOneWithoutReactionsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentWhereUniqueInput_1.CommentWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentWhereUniqueInput_1.CommentWhereUniqueInput)
], CommentUpdateOneWithoutReactionsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateWithoutReactionsInput_1.CommentUpdateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateWithoutReactionsInput_1.CommentUpdateWithoutReactionsInput)
], CommentUpdateOneWithoutReactionsInput.prototype, "update", void 0);
CommentUpdateOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentUpdateOneWithoutReactionsInput", {
        isAbstract: true
    })
], CommentUpdateOneWithoutReactionsInput);
exports.CommentUpdateOneWithoutReactionsInput = CommentUpdateOneWithoutReactionsInput;
