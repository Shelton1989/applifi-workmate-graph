"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateWithoutUserInput_1 = require("../inputs/LLMQueryCreateWithoutUserInput");
const LLMQueryWhereUniqueInput_1 = require("../inputs/LLMQueryWhereUniqueInput");
let LLMQueryCreateOrConnectWithoutUserInput = class LLMQueryCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], LLMQueryCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateWithoutUserInput_1.LLMQueryCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateWithoutUserInput_1.LLMQueryCreateWithoutUserInput)
], LLMQueryCreateOrConnectWithoutUserInput.prototype, "create", void 0);
LLMQueryCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], LLMQueryCreateOrConnectWithoutUserInput);
exports.LLMQueryCreateOrConnectWithoutUserInput = LLMQueryCreateOrConnectWithoutUserInput;
