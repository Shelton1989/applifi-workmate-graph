"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryCreateWithoutUserInput_1 = require("../inputs/LLMQueryCreateWithoutUserInput");
const LLMQueryUpdateWithoutUserInput_1 = require("../inputs/LLMQueryUpdateWithoutUserInput");
const LLMQueryWhereUniqueInput_1 = require("../inputs/LLMQueryWhereUniqueInput");
let LLMQueryUpsertWithWhereUniqueWithoutUserInput = class LLMQueryUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryWhereUniqueInput_1.LLMQueryWhereUniqueInput)
], LLMQueryUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryUpdateWithoutUserInput_1.LLMQueryUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryUpdateWithoutUserInput_1.LLMQueryUpdateWithoutUserInput)
], LLMQueryUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateWithoutUserInput_1.LLMQueryCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateWithoutUserInput_1.LLMQueryCreateWithoutUserInput)
], LLMQueryUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
LLMQueryUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], LLMQueryUpsertWithWhereUniqueWithoutUserInput);
exports.LLMQueryUpsertWithWhereUniqueWithoutUserInput = LLMQueryUpsertWithWhereUniqueWithoutUserInput;
