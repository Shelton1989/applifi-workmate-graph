"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateInput_1 = require("../../../inputs/ReplyCreateInput");
let CreateReplyArgs = class CreateReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateInput_1.ReplyCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyCreateInput_1.ReplyCreateInput)
], CreateReplyArgs.prototype, "data", void 0);
CreateReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateReplyArgs);
exports.CreateReplyArgs = CreateReplyArgs;
