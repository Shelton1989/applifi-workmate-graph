"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTopicListsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTopicListsArgs_1 = require("./args/FindUniqueTopicListsArgs");
const TopicLists_1 = require("../../../models/TopicLists");
const helpers_1 = require("../../../helpers");
let FindUniqueTopicListsResolver = class FindUniqueTopicListsResolver {
    async findUniqueTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TopicLists_1.TopicLists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTopicListsArgs_1.FindUniqueTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTopicListsResolver.prototype, "findUniqueTopicLists", null);
FindUniqueTopicListsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TopicLists_1.TopicLists)
], FindUniqueTopicListsResolver);
exports.FindUniqueTopicListsResolver = FindUniqueTopicListsResolver;
