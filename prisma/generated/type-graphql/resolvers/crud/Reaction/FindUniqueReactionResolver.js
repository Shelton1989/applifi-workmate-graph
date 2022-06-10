"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueReactionArgs_1 = require("./args/FindUniqueReactionArgs");
const Reaction_1 = require("../../../models/Reaction");
const helpers_1 = require("../../../helpers");
let FindUniqueReactionResolver = class FindUniqueReactionResolver {
    async reaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReactionArgs_1.FindUniqueReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueReactionResolver.prototype, "reaction", null);
FindUniqueReactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reaction_1.Reaction)
], FindUniqueReactionResolver);
exports.FindUniqueReactionResolver = FindUniqueReactionResolver;
