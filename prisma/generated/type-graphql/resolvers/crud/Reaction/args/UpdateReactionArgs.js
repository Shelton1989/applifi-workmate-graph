"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateInput_1 = require("../../../inputs/ReactionUpdateInput");
const ReactionWhereUniqueInput_1 = require("../../../inputs/ReactionWhereUniqueInput");
let UpdateReactionArgs = class UpdateReactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateInput_1.ReactionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateInput_1.ReactionUpdateInput)
], UpdateReactionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], UpdateReactionArgs.prototype, "where", void 0);
UpdateReactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateReactionArgs);
exports.UpdateReactionArgs = UpdateReactionArgs;
