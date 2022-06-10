"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyReactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionWhereInput_1 = require("../../../inputs/ReactionWhereInput");
let DeleteManyReactionArgs = class DeleteManyReactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereInput_1.ReactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionWhereInput_1.ReactionWhereInput)
], DeleteManyReactionArgs.prototype, "where", void 0);
DeleteManyReactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyReactionArgs);
exports.DeleteManyReactionArgs = DeleteManyReactionArgs;
