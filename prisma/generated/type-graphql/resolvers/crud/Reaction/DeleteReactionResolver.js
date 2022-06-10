"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteReactionArgs_1 = require("./args/DeleteReactionArgs");
const Reaction_1 = require("../../../models/Reaction");
const helpers_1 = require("../../../helpers");
let DeleteReactionResolver = class DeleteReactionResolver {
    async deleteReaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReactionArgs_1.DeleteReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteReactionResolver.prototype, "deleteReaction", null);
DeleteReactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reaction_1.Reaction)
], DeleteReactionResolver);
exports.DeleteReactionResolver = DeleteReactionResolver;
