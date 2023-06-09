"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutAuthorInput_1 = require("../inputs/ReactionCreateWithoutAuthorInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateOrConnectWithoutAuthorInput = class ReactionCreateOrConnectWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutAuthorInput_1.ReactionCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutAuthorInput_1.ReactionCreateWithoutAuthorInput)
], ReactionCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
ReactionCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateOrConnectWithoutAuthorInput", {
        isAbstract: true
    })
], ReactionCreateOrConnectWithoutAuthorInput);
exports.ReactionCreateOrConnectWithoutAuthorInput = ReactionCreateOrConnectWithoutAuthorInput;
