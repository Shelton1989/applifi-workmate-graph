"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyUpdateManyMutationInput_1 = require("../../../inputs/ReplyUpdateManyMutationInput");
const ReplyWhereInput_1 = require("../../../inputs/ReplyWhereInput");
let UpdateManyReplyArgs = class UpdateManyReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyMutationInput_1.ReplyUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyMutationInput_1.ReplyUpdateManyMutationInput)
], UpdateManyReplyArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereInput_1.ReplyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereInput_1.ReplyWhereInput)
], UpdateManyReplyArgs.prototype, "where", void 0);
UpdateManyReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReplyArgs);
exports.UpdateManyReplyArgs = UpdateManyReplyArgs;
