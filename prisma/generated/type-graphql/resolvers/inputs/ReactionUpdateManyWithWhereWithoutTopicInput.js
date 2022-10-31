"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateManyWithWhereWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionScalarWhereInput_1 = require("../inputs/ReactionScalarWhereInput");
const ReactionUpdateManyMutationInput_1 = require("../inputs/ReactionUpdateManyMutationInput");
let ReactionUpdateManyWithWhereWithoutTopicInput = class ReactionUpdateManyWithWhereWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionScalarWhereInput_1.ReactionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionScalarWhereInput_1.ReactionScalarWhereInput)
], ReactionUpdateManyWithWhereWithoutTopicInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyMutationInput_1.ReactionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyMutationInput_1.ReactionUpdateManyMutationInput)
], ReactionUpdateManyWithWhereWithoutTopicInput.prototype, "data", void 0);
ReactionUpdateManyWithWhereWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateManyWithWhereWithoutTopicInput", {
        isAbstract: true
    })
], ReactionUpdateManyWithWhereWithoutTopicInput);
exports.ReactionUpdateManyWithWhereWithoutTopicInput = ReactionUpdateManyWithWhereWithoutTopicInput;
