"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyOrderByWithRelationInput_1 = require("../../../inputs/ReplyOrderByWithRelationInput");
const ReplyWhereInput_1 = require("../../../inputs/ReplyWhereInput");
const ReplyWhereUniqueInput_1 = require("../../../inputs/ReplyWhereUniqueInput");
let AggregateReplyArgs = class AggregateReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereInput_1.ReplyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereInput_1.ReplyWhereInput)
], AggregateReplyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyOrderByWithRelationInput_1.ReplyOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateReplyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], AggregateReplyArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReplyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReplyArgs.prototype, "skip", void 0);
AggregateReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateReplyArgs);
exports.AggregateReplyArgs = AggregateReplyArgs;
