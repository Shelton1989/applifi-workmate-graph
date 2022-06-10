"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyWhereInput_1 = require("../../../inputs/ReplyWhereInput");
let DeleteManyReplyArgs = class DeleteManyReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereInput_1.ReplyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereInput_1.ReplyWhereInput)
], DeleteManyReplyArgs.prototype, "where", void 0);
DeleteManyReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReplyArgs);
exports.DeleteManyReplyArgs = DeleteManyReplyArgs;
