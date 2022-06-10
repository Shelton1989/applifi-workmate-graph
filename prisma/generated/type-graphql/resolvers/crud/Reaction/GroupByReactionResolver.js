"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByReactionArgs_1 = require("./args/GroupByReactionArgs");
const Reaction_1 = require("../../../models/Reaction");
const ReactionGroupBy_1 = require("../../outputs/ReactionGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReactionResolver = class GroupByReactionResolver {
    async groupByReaction(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionGroupBy_1.ReactionGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReactionArgs_1.GroupByReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReactionResolver.prototype, "groupByReaction", null);
GroupByReactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reaction_1.Reaction)
], GroupByReactionResolver);
exports.GroupByReactionResolver = GroupByReactionResolver;
