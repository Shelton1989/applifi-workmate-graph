"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithWhereUniqueWithoutPostInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateWithoutPostInput_1 = require("../inputs/ReactionUpdateWithoutPostInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateWithWhereUniqueWithoutPostInput = class ReactionUpdateWithWhereUniqueWithoutPostInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpdateWithWhereUniqueWithoutPostInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutPostInput_1.ReactionUpdateWithoutPostInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutPostInput_1.ReactionUpdateWithoutPostInput)
], ReactionUpdateWithWhereUniqueWithoutPostInput.prototype, "data", void 0);
ReactionUpdateWithWhereUniqueWithoutPostInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutPostInput", {
        isAbstract: true
    })
], ReactionUpdateWithWhereUniqueWithoutPostInput);
exports.ReactionUpdateWithWhereUniqueWithoutPostInput = ReactionUpdateWithWhereUniqueWithoutPostInput;
