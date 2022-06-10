"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionUpdateManyMutationInput_1 = require("../../../inputs/ReactionUpdateManyMutationInput");
const ReactionWhereInput_1 = require("../../../inputs/ReactionWhereInput");
let UpdateManyReactionArgs = class UpdateManyReactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyMutationInput_1.ReactionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyMutationInput_1.ReactionUpdateManyMutationInput)
], UpdateManyReactionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereInput_1.ReactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionWhereInput_1.ReactionWhereInput)
], UpdateManyReactionArgs.prototype, "where", void 0);
UpdateManyReactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReactionArgs);
exports.UpdateManyReactionArgs = UpdateManyReactionArgs;
