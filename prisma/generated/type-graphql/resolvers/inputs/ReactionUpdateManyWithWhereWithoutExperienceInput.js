"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateManyWithWhereWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionScalarWhereInput_1 = require("../inputs/ReactionScalarWhereInput");
const ReactionUpdateManyMutationInput_1 = require("../inputs/ReactionUpdateManyMutationInput");
let ReactionUpdateManyWithWhereWithoutExperienceInput = class ReactionUpdateManyWithWhereWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionScalarWhereInput_1.ReactionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionScalarWhereInput_1.ReactionScalarWhereInput)
], ReactionUpdateManyWithWhereWithoutExperienceInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyMutationInput_1.ReactionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyMutationInput_1.ReactionUpdateManyMutationInput)
], ReactionUpdateManyWithWhereWithoutExperienceInput.prototype, "data", void 0);
ReactionUpdateManyWithWhereWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateManyWithWhereWithoutExperienceInput", {
        isAbstract: true
    })
], ReactionUpdateManyWithWhereWithoutExperienceInput);
exports.ReactionUpdateManyWithWhereWithoutExperienceInput = ReactionUpdateManyWithWhereWithoutExperienceInput;
