"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateNestedManyWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyPostInputEnvelope_1 = require("../inputs/ReactionCreateManyPostInputEnvelope");
const ReactionCreateOrConnectWithoutPostInput_1 = require("../inputs/ReactionCreateOrConnectWithoutPostInput");
const ReactionCreateWithoutPostInput_1 = require("../inputs/ReactionCreateWithoutPostInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateNestedManyWithoutPostInput = class ReactionCreateNestedManyWithoutPostInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutPostInput_1.ReactionCreateWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutPostInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutPostInput_1.ReactionCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutPostInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyPostInputEnvelope_1.ReactionCreateManyPostInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyPostInputEnvelope_1.ReactionCreateManyPostInputEnvelope)
], ReactionCreateNestedManyWithoutPostInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutPostInput.prototype, "connect", void 0);
ReactionCreateNestedManyWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateNestedManyWithoutPostInput", {
        isAbstract: true
    })
], ReactionCreateNestedManyWithoutPostInput);
exports.ReactionCreateNestedManyWithoutPostInput = ReactionCreateNestedManyWithoutPostInput;
