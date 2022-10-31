"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateNestedManyWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyTopicInputEnvelope_1 = require("../inputs/ReactionCreateManyTopicInputEnvelope");
const ReactionCreateOrConnectWithoutTopicInput_1 = require("../inputs/ReactionCreateOrConnectWithoutTopicInput");
const ReactionCreateWithoutTopicInput_1 = require("../inputs/ReactionCreateWithoutTopicInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateNestedManyWithoutTopicInput = class ReactionCreateNestedManyWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutTopicInput_1.ReactionCreateWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutTopicInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutTopicInput_1.ReactionCreateOrConnectWithoutTopicInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutTopicInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyTopicInputEnvelope_1.ReactionCreateManyTopicInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyTopicInputEnvelope_1.ReactionCreateManyTopicInputEnvelope)
], ReactionCreateNestedManyWithoutTopicInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutTopicInput.prototype, "connect", void 0);
ReactionCreateNestedManyWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateNestedManyWithoutTopicInput", {
        isAbstract: true
    })
], ReactionCreateNestedManyWithoutTopicInput);
exports.ReactionCreateNestedManyWithoutTopicInput = ReactionCreateNestedManyWithoutTopicInput;
