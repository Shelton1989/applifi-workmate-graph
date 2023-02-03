"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateNestedManyWithoutExperienceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyExperienceInputEnvelope_1 = require("../inputs/ReactionCreateManyExperienceInputEnvelope");
const ReactionCreateOrConnectWithoutExperienceInput_1 = require("../inputs/ReactionCreateOrConnectWithoutExperienceInput");
const ReactionCreateWithoutExperienceInput_1 = require("../inputs/ReactionCreateWithoutExperienceInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateNestedManyWithoutExperienceInput = class ReactionCreateNestedManyWithoutExperienceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutExperienceInput_1.ReactionCreateWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutExperienceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutExperienceInput_1.ReactionCreateOrConnectWithoutExperienceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutExperienceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyExperienceInputEnvelope_1.ReactionCreateManyExperienceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyExperienceInputEnvelope_1.ReactionCreateManyExperienceInputEnvelope)
], ReactionCreateNestedManyWithoutExperienceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutExperienceInput.prototype, "connect", void 0);
ReactionCreateNestedManyWithoutExperienceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateNestedManyWithoutExperienceInput", {
        isAbstract: true
    })
], ReactionCreateNestedManyWithoutExperienceInput);
exports.ReactionCreateNestedManyWithoutExperienceInput = ReactionCreateNestedManyWithoutExperienceInput;
