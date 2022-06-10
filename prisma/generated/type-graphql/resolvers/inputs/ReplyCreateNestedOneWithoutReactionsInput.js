"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCreateNestedOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReplyCreateOrConnectWithoutReactionsInput_1 = require("../inputs/ReplyCreateOrConnectWithoutReactionsInput");
const ReplyCreateWithoutReactionsInput_1 = require("../inputs/ReplyCreateWithoutReactionsInput");
const ReplyWhereUniqueInput_1 = require("../inputs/ReplyWhereUniqueInput");
let ReplyCreateNestedOneWithoutReactionsInput = class ReplyCreateNestedOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateWithoutReactionsInput_1.ReplyCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateWithoutReactionsInput_1.ReplyCreateWithoutReactionsInput)
], ReplyCreateNestedOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateOrConnectWithoutReactionsInput_1.ReplyCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateOrConnectWithoutReactionsInput_1.ReplyCreateOrConnectWithoutReactionsInput)
], ReplyCreateNestedOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyWhereUniqueInput_1.ReplyWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyWhereUniqueInput_1.ReplyWhereUniqueInput)
], ReplyCreateNestedOneWithoutReactionsInput.prototype, "connect", void 0);
ReplyCreateNestedOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReplyCreateNestedOneWithoutReactionsInput", {
        isAbstract: true
    })
], ReplyCreateNestedOneWithoutReactionsInput);
exports.ReplyCreateNestedOneWithoutReactionsInput = ReplyCreateNestedOneWithoutReactionsInput;
