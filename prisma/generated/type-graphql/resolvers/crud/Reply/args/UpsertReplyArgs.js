"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateInput_1 = require("../../../inputs/ReplyCreateInput");
const ReplyUpdateInput_1 = require("../../../inputs/ReplyUpdateInput");
const ReplyWhereUniqueInput_1 = require("../../../inputs/ReplyWhereUniqueInput");
let UpsertReplyArgs = class UpsertReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], UpsertReplyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateInput_1.ReplyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyCreateInput_1.ReplyCreateInput)
], UpsertReplyArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateInput_1.ReplyUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyUpdateInput_1.ReplyUpdateInput)
], UpsertReplyArgs.prototype, "update", void 0);
UpsertReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertReplyArgs);
exports.UpsertReplyArgs = UpsertReplyArgs;
