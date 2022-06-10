"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionWhereUniqueInput_1 = require("../../../inputs/ReactionWhereUniqueInput");
let DeleteReactionArgs = class DeleteReactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], DeleteReactionArgs.prototype, "where", void 0);
DeleteReactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteReactionArgs);
exports.DeleteReactionArgs = DeleteReactionArgs;
