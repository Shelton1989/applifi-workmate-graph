"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateManyAuthorInput_1 = require("../inputs/ReplyCreateManyAuthorInput");
let ReplyCreateManyAuthorInputEnvelope = class ReplyCreateManyAuthorInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyCreateManyAuthorInput_1.ReplyCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReplyCreateManyAuthorInputEnvelope.prototype, "data", void 0);
ReplyCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateManyAuthorInputEnvelope", {
        isAbstract: true
    })
], ReplyCreateManyAuthorInputEnvelope);
exports.ReplyCreateManyAuthorInputEnvelope = ReplyCreateManyAuthorInputEnvelope;
