"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTopicResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTopicArgs_1 = require("./args/GroupByTopicArgs");
const Topic_1 = require("../../../models/Topic");
const TopicGroupBy_1 = require("../../outputs/TopicGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTopicResolver = class GroupByTopicResolver {
    async groupByTopic(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TopicGroupBy_1.TopicGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTopicArgs_1.GroupByTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTopicResolver.prototype, "groupByTopic", null);
GroupByTopicResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Topic_1.Topic)
], GroupByTopicResolver);
exports.GroupByTopicResolver = GroupByTopicResolver;
