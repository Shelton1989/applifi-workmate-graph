"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepliesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyOrderByWithRelationInput_1 = require("../../../inputs/ReplyOrderByWithRelationInput");
const ReplyWhereInput_1 = require("../../../inputs/ReplyWhereInput");
const ReplyWhereUniqueInput_1 = require("../../../inputs/ReplyWhereUniqueInput");
const ReplyScalarFieldEnum_1 = require("../../../../enums/ReplyScalarFieldEnum");
let UserRepliesArgs = class UserRepliesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereInput_1.ReplyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereInput_1.ReplyWhereInput)
], UserRepliesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyOrderByWithRelationInput_1.ReplyOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserRepliesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], UserRepliesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserRepliesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserRepliesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReplyScalarFieldEnum_1.ReplyScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserRepliesArgs.prototype, "distinct", void 0);
UserRepliesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserRepliesArgs);
exports.UserRepliesArgs = UserRepliesArgs;
