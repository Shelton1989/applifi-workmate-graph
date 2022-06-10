"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionWhereUniqueInput_1 = require("../../../inputs/ReactionWhereUniqueInput");
let FindUniqueReactionArgs = class FindUniqueReactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionWhereUniqueInput_1.ReactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionWhereUniqueInput_1.ReactionWhereUniqueInput)
], FindUniqueReactionArgs.prototype, "where", void 0);
FindUniqueReactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueReactionArgs);
exports.FindUniqueReactionArgs = FindUniqueReactionArgs;
