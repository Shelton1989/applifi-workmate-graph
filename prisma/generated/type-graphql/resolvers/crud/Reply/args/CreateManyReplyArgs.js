"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateManyInput_1 = require("../../../inputs/ReplyCreateManyInput");
let CreateManyReplyArgs = class CreateManyReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateManyInput_1.ReplyCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReplyArgs.prototype, "data", void 0);
CreateManyReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReplyArgs);
exports.CreateManyReplyArgs = CreateManyReplyArgs;
