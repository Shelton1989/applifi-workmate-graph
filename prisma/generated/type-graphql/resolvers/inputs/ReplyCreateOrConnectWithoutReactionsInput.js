"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateOrConnectWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateWithoutReactionsInput_1 = require("../inputs/ReplyCreateWithoutReactionsInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyCreateOrConnectWithoutReactionsInput = class ReplyCreateOrConnectWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], ReplyCreateOrConnectWithoutReactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateWithoutReactionsInput_1.ReplyCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReplyCreateWithoutReactionsInput_1.ReplyCreateWithoutReactionsInput)
], ReplyCreateOrConnectWithoutReactionsInput.prototype, "create", void 0);
ReplyCreateOrConnectWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateOrConnectWithoutReactionsInput", {
        isAbstract: true
    })
], ReplyCreateOrConnectWithoutReactionsInput);
exports.ReplyCreateOrConnectWithoutReactionsInput = ReplyCreateOrConnectWithoutReactionsInput;
