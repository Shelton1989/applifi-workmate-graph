"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LLMQueryScalarWhereInput_1 = require("../inputs/LLMQueryScalarWhereInput");
const LLMQueryUpdateManyMutationInput_1 = require("../inputs/LLMQueryUpdateManyMutationInput");
let LLMQueryUpdateManyWithWhereWithoutUserInput = class LLMQueryUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryScalarWhereInput_1.LLMQueryScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryScalarWhereInput_1.LLMQueryScalarWhereInput)
], LLMQueryUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryUpdateManyMutationInput_1.LLMQueryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LLMQueryUpdateManyMutationInput_1.LLMQueryUpdateManyMutationInput)
], LLMQueryUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
LLMQueryUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LLMQueryUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], LLMQueryUpdateManyWithWhereWithoutUserInput);
exports.LLMQueryUpdateManyWithWhereWithoutUserInput = LLMQueryUpdateManyWithWhereWithoutUserInput;
