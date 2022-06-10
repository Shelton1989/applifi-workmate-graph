"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateManyAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReplyCreateManyAuthorInput = class ReplyCreateManyAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateManyAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateManyAuthorInput.prototype, "text", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReplyCreateManyAuthorInput.prototype, "commentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyCreateManyAuthorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReplyCreateManyAuthorInput.prototype, "updatedAt", void 0);
ReplyCreateManyAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateManyAuthorInput", {
        isAbstract: true
    })
], ReplyCreateManyAuthorInput);
exports.ReplyCreateManyAuthorInput = ReplyCreateManyAuthorInput;
