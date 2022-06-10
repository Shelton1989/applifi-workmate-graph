"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyUpdateInput_1 = require("../../../inputs/ReplyUpdateInput");
const ReplyWhereUniqueInput_1 = require("../../../inputs/ReplyWhereUniqueInput");
let UpdateReplyArgs = class UpdateReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateInput_1.ReplyUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyUpdateInput_1.ReplyUpdateInput)
], UpdateReplyArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], UpdateReplyArgs.prototype, "where", void 0);
UpdateReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateReplyArgs);
exports.UpdateReplyArgs = UpdateReplyArgs;
