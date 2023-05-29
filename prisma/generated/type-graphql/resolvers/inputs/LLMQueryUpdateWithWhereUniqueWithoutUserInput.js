"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryUpdateWithoutUserInput_1 = require("../inputs/LLMQueryUpdateWithoutUserInput");
const LLMQueryWhereUniqueInput_1 = require("../inputs/LLMQueryWhereUniqueInput");
let LLMQueryUpdateWithWhereUniqueWithoutUserInput = class LLMQueryUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], LLMQueryUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryUpdateWithoutUserInput_1.LLMQueryUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryUpdateWithoutUserInput_1.LLMQueryUpdateWithoutUserInput)
], LLMQueryUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
LLMQueryUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], LLMQueryUpdateWithWhereUniqueWithoutUserInput);
exports.LLMQueryUpdateWithWhereUniqueWithoutUserInput = LLMQueryUpdateWithWhereUniqueWithoutUserInput;
