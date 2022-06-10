"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateInput_1 = require("../../../inputs/ReactionCreateInput");
let CreateReactionArgs = class CreateReactionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateInput_1.ReactionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionCreateInput_1.ReactionCreateInput)
], CreateReactionArgs.prototype, "data", void 0);
CreateReactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateReactionArgs);
exports.CreateReactionArgs = CreateReactionArgs;
