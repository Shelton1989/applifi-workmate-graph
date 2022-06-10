"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpsertWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateWithoutPostInput_1 = require("../inputs/ReactionCreateWithoutPostInput");
const ReactionUpdateWithoutPostInput_1 = require("../inputs/ReactionUpdateWithoutPostInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpsertWithWhereUniqueWithoutPostInput = class ReactionUpsertWithWhereUniqueWithoutPostInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpsertWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutPostInput_1.ReactionUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutPostInput_1.ReactionUpdateWithoutPostInput)
], ReactionUpsertWithWhereUniqueWithoutPostInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateWithoutPostInput_1.ReactionCreateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateWithoutPostInput_1.ReactionCreateWithoutPostInput)
], ReactionUpsertWithWhereUniqueWithoutPostInput.prototype, "create", void 0);
ReactionUpsertWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpsertWithWhereUniqueWithoutPostInput", {
        isAbstract: true
    })
], ReactionUpsertWithWhereUniqueWithoutPostInput);
exports.ReactionUpsertWithWhereUniqueWithoutPostInput = ReactionUpsertWithWhereUniqueWithoutPostInput;
