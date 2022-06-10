"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateNestedManyWithoutReplyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyReplyInputEnvelope_1 = require("../inputs/ReactionCreateManyReplyInputEnvelope");
const ReactionCreateOrConnectWithoutReplyInput_1 = require("../inputs/ReactionCreateOrConnectWithoutReplyInput");
const ReactionCreateWithoutReplyInput_1 = require("../inputs/ReactionCreateWithoutReplyInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateNestedManyWithoutReplyInput = class ReactionCreateNestedManyWithoutReplyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutReplyInput_1.ReactionCreateWithoutReplyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutReplyInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutReplyInput_1.ReactionCreateOrConnectWithoutReplyInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutReplyInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyReplyInputEnvelope_1.ReactionCreateManyReplyInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyReplyInputEnvelope_1.ReactionCreateManyReplyInputEnvelope)
], ReactionCreateNestedManyWithoutReplyInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutReplyInput.prototype, "connect", void 0);
ReactionCreateNestedManyWithoutReplyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateNestedManyWithoutReplyInput", {
        isAbstract: true
    })
], ReactionCreateNestedManyWithoutReplyInput);
exports.ReactionCreateNestedManyWithoutReplyInput = ReactionCreateNestedManyWithoutReplyInput;
