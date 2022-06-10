"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyWhereUniqueInput_1 = require("../../../inputs/ReplyWhereUniqueInput");
let DeleteReplyArgs = class DeleteReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], DeleteReplyArgs.prototype, "where", void 0);
DeleteReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteReplyArgs);
exports.DeleteReplyArgs = DeleteReplyArgs;
