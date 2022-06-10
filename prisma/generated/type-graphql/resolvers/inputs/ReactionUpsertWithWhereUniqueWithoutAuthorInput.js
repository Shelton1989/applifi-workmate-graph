"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutAuthorInput_1 = require("../inputs/ReactionCreateWithoutAuthorInput");
const ReactionUpdateWithoutAuthorInput_1 = require("../inputs/ReactionUpdateWithoutAuthorInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpsertWithWhereUniqueWithoutAuthorInput = class ReactionUpsertWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutAuthorInput_1.ReactionUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutAuthorInput_1.ReactionUpdateWithoutAuthorInput)
], ReactionUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutAuthorInput_1.ReactionCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutAuthorInput_1.ReactionCreateWithoutAuthorInput)
], ReactionUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
ReactionUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], ReactionUpsertWithWhereUniqueWithoutAuthorInput);
exports.ReactionUpsertWithWhereUniqueWithoutAuthorInput = ReactionUpsertWithWhereUniqueWithoutAuthorInput;
