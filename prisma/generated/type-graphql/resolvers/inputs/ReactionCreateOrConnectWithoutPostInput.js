"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateOrConnectWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutPostInput_1 = require("../inputs/ReactionCreateWithoutPostInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateOrConnectWithoutPostInput = class ReactionCreateOrConnectWithoutPostInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionCreateOrConnectWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutPostInput_1.ReactionCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutPostInput_1.ReactionCreateWithoutPostInput)
], ReactionCreateOrConnectWithoutPostInput.prototype, "create", void 0);
ReactionCreateOrConnectWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateOrConnectWithoutPostInput", {
        isAbstract: true
    })
], ReactionCreateOrConnectWithoutPostInput);
exports.ReactionCreateOrConnectWithoutPostInput = ReactionCreateOrConnectWithoutPostInput;
