"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyWhereUniqueInput_1 = require("../../../inputs/ReplyWhereUniqueInput");
let FindUniqueReplyArgs = class FindUniqueReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], FindUniqueReplyArgs.prototype, "where", void 0);
FindUniqueReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueReplyArgs);
exports.FindUniqueReplyArgs = FindUniqueReplyArgs;
