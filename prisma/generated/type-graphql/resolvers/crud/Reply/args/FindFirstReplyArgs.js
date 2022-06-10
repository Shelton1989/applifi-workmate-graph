"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReplyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyOrderByWithRelationInput_1 = require("../../../inputs/ReplyOrderByWithRelationInput");
const ReplyWhereInput_1 = require("../../../inputs/ReplyWhereInput");
const ReplyWhereUniqueInput_1 = require("../../../inputs/ReplyWhereUniqueInput");
const ReplyScalarFieldEnum_1 = require("../../../../enums/ReplyScalarFieldEnum");
let FindFirstReplyArgs = class FindFirstReplyArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereInput_1.ReplyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereInput_1.ReplyWhereInput)
], FindFirstReplyArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyOrderByWithRelationInput_1.ReplyOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstReplyArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], FindFirstReplyArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstReplyArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstReplyArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyScalarFieldEnum_1.ReplyScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstReplyArgs.prototype, "distinct", void 0);
FindFirstReplyArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstReplyArgs);
exports.FindFirstReplyArgs = FindFirstReplyArgs;
