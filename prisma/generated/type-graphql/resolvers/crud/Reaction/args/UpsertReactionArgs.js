"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertReactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateInput_1 = require("../../../inputs/ReactionCreateInput");
const ReactionUpdateInput_1 = require("../../../inputs/ReactionUpdateInput");
const ReactionWhereUniqueInput_1 = require("../../../inputs/ReactionWhereUniqueInput");
let UpsertReactionArgs = class UpsertReactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], UpsertReactionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateInput_1.ReactionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateInput_1.ReactionCreateInput)
], UpsertReactionArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateInput_1.ReactionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateInput_1.ReactionUpdateInput)
], UpsertReactionArgs.prototype, "update", void 0);
UpsertReactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertReactionArgs);
exports.UpsertReactionArgs = UpsertReactionArgs;
