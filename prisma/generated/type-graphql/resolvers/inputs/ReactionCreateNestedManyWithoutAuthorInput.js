"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateManyAuthorInputEnvelope_1 = require("../inputs/ReactionCreateManyAuthorInputEnvelope");
const ReactionCreateOrConnectWithoutAuthorInput_1 = require("../inputs/ReactionCreateOrConnectWithoutAuthorInput");
const ReactionCreateWithoutAuthorInput_1 = require("../inputs/ReactionCreateWithoutAuthorInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionCreateNestedManyWithoutAuthorInput = class ReactionCreateNestedManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateWithoutAuthorInput_1.ReactionCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionCreateOrConnectWithoutAuthorInput_1.ReactionCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateManyAuthorInputEnvelope_1.ReactionCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateManyAuthorInputEnvelope_1.ReactionCreateManyAuthorInputEnvelope)
], ReactionCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionWhereUniqueInput_1.ReactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
ReactionCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionCreateNestedManyWithoutAuthorInput", {
        isAbstract: true
    })
], ReactionCreateNestedManyWithoutAuthorInput);
exports.ReactionCreateNestedManyWithoutAuthorInput = ReactionCreateNestedManyWithoutAuthorInput;
