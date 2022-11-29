"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTopicListsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTopicListsArgs_1 = require("./args/GroupByTopicListsArgs");
const TopicLists_1 = require("../../../models/TopicLists");
const TopicListsGroupBy_1 = require("../../outputs/TopicListsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTopicListsResolver = class GroupByTopicListsResolver {
    async groupByTopicLists(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TopicListsGroupBy_1.TopicListsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTopicListsArgs_1.GroupByTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTopicListsResolver.prototype, "groupByTopicLists", null);
GroupByTopicListsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TopicLists_1.TopicLists)
], GroupByTopicListsResolver);
exports.GroupByTopicListsResolver = GroupByTopicListsResolver;
