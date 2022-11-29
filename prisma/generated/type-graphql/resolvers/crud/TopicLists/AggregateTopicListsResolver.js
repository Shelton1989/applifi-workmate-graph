"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTopicListsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTopicListsArgs_1 = require("./args/AggregateTopicListsArgs");
const TopicLists_1 = require("../../../models/TopicLists");
const AggregateTopicLists_1 = require("../../outputs/AggregateTopicLists");
const helpers_1 = require("../../../helpers");
let AggregateTopicListsResolver = class AggregateTopicListsResolver {
    async aggregateTopicLists(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTopicLists_1.AggregateTopicLists, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTopicListsArgs_1.AggregateTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTopicListsResolver.prototype, "aggregateTopicLists", null);
AggregateTopicListsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TopicLists_1.TopicLists)
], AggregateTopicListsResolver);
exports.AggregateTopicListsResolver = AggregateTopicListsResolver;
