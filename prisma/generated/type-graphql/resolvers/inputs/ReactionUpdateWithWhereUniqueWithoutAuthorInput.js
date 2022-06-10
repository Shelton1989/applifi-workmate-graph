"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateWithoutAuthorInput_1 = require("../inputs/ReactionUpdateWithoutAuthorInput");
const ReactionWhereUniqueInput_1 = require("../inputs/ReactionWhereUniqueInput");
let ReactionUpdateWithWhereUniqueWithoutAuthorInput = class ReactionUpdateWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], ReactionUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateWithoutAuthorInput_1.ReactionUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateWithoutAuthorInput_1.ReactionUpdateWithoutAuthorInput)
], ReactionUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
ReactionUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionUpdateWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], ReactionUpdateWithWhereUniqueWithoutAuthorInput);
exports.ReactionUpdateWithWhereUniqueWithoutAuthorInput = ReactionUpdateWithWhereUniqueWithoutAuthorInput;
